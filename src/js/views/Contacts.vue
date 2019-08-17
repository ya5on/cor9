<template>
    <section class="contacts">
        <div class="contacts__content">
            <div class="container">
                <div class="contacts__items">
                    <div class="contacts__info">
                        <div class="section-head">
                            <div>
                                <span>Get in touch</span>
                                <h3>Contact</h3>
                            </div>
                            <i></i>
                        </div>
                        <div class="contacts__block">
                            <div class="item">
                                <span class="icon"></span>
                                <div class="cont">
                                    <h6>Phone : </h6>
                                    <a href="tel:+380995452740">+38-099-5452-740</a>
                                    <a href="tel:+380633837133">+38-063-3837-133</a>
                                </div>
                            </div>
                            <div class="item">
                                <span class="icon"></span>
                                <div class="cont">
                                    <h6>Email : </h6>
                                    <a href="mailto:name@email.com" title="email">target@mail.com</a>
                                </div>
                            </div>
                            <div class="item">
                                <span class="icon"></span>
                                <div class="cont">
                                    <h6>Address : </h6>
                                    <p>54/9 Mayakovsky Avenue, Kyiv</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="contacts__form">
                        <form class="form" id="contact-form" method="post" action="contacts.php">
                            <div class="contacts__controls">
                                <div class="col-6">
                                    <div class="form-group">
                                        <input id="form_name" type="text" name="name" placeholder="Name"
                                               required="required">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input id="form_email" type="email" name="email" placeholder="Email"
                                               required="required">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input id="form_subject" type="text" name="subject" placeholder="Subject">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                    <textarea id="form_message" name="message" placeholder="Message" rows="4"
                                              required="required"></textarea>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn"><span>Send
                                            Message</span></button>
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

    export default {
        name: 'contact',
        components: {
            Footer
        },


    };
</script>
