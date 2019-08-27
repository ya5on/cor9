<template>
    <section class="contacts">
        <div class="contacts__content">
            <div class="container">
                <div class="contacts__items">
                    <div class="contacts__info">
                        <div class="section-head">
                            <div>
                                <span>Get in touch</span>
                                <h3>Контакты</h3>
                            </div>
                            <i></i>
                        </div>
                        <div class="contacts__block">
                            <div class="item">
                                <span class="icon"></span>
                                <div class="cont">
                                    <h6>Телефоны : </h6>
                                    <a href="tel:+380995452740">+38-099-545-27-40</a>
                                    <a href="tel:+380633837133">+38-063-383-71-33</a>
                                </div>
                            </div>
                            <div class="item">
                                <span class="icon"></span>
                                <div class="cont">
                                    <h6>Email : </h6>
                                    <a href="mailto:info@cor9.pro" title="email">info@cor9.pro</a>
                                </div>
                            </div>
                            <div class="item">
                                <span class="icon"></span>
                                <div class="cont">
                                    <h6>Адрес : </h6>
                                    <p>54/9 Mayakovsky Avenue, Kyiv</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="contacts__form">
                        <form class="form" id="contact-form" method="post" @submit.prevent="validateForm">
                            <div class="contacts__controls">
                                <div class="col-6">
                                    <div class="form-group">
                                        <input id="form_name" type="text" name="name" placeholder="ФИО" v-model="name"
                                               required="required">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input id="form_email" type="email" name="email" placeholder="Email"
                                               v-model="email"
                                               required="required">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input id="form_subject" type="text" name="subject" placeholder="Тема"
                                               v-model="theme"
                                               required="required">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                    <textarea id="form_message" name="message" placeholder="Сообщение" rows="4"
                                              v-model="message"
                                              required="required"></textarea>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button :submit="true" class="btn"><span>Отправить</span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </section>
</template>

<script>
    import Footer from '../components/Footer'
    import axios from 'axios'
    import swal from 'sweetalert'

    export default {
        name: 'contact',
        components: {
            Footer
        },
        data() {
            return {
                name: '',
                email: '',
                message: '',
                theme: '',
                errs: [],
                attemptSubmit: false,
                postStatus: false
            }
        },
        computed: {
            missingEmail: function () {
                return (
                    this.isEmail(this.email) === null)
            },
        },
        methods: {
            isEmail: ( str ) => {
                let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return str.match(regexp);
            },
            validateForm: function (event) {
                this.attemptSubmit = true;
                if (this.missingEmail) {
                    event.preventDefault();
                } else {
                    this.onSubmit();
                }
            },
            onSubmit() {
                axios.post('/php/mail.php', {
                    'name': this.name,
                    'email': this.email,
                    'message': this.message,
                    'theme': this.theme
                }).then(response => {
                    if (response.data.error) {
                        swal("Ошибка", "error");
                        console.log('error', response.data.error)
                    } else {
                        this.postStatus = true;
                        swal("Успешно!", "Сообщение отправлено!", "success",);
                        this.name = '';
                        this.theme = '';
                        this.email = '';
                        this.message = '';
                        console.log('success')
                    }
                }).catch(error => {
                    swal("Ошибка", "error");
                    console.log(error.response)
                });
            }
        },

    };
</script>
