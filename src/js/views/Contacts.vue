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
                                <span class="icon"><i class="fas fa-phone"></i></span>
                                <div class="cont">
                                    <h6>Phone : </h6>
                                    <p>+20 010 251 789 18 , 251 789 18</p>
                                </div>
                            </div>
                            <div class="item">
                                <span class="icon"><i class="fas fa-envelope"></i></span>
                                <div class="cont">
                                    <h6>Email : </h6>
                                    <p><a href="pifo_support@website.com">Thomas_support@website.com</a></p>
                                </div>
                            </div>
                            <div class="item">
                                <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
                                <div class="cont">
                                    <h6>Address : </h6>
                                    <p>4655 Carter Street, Olney, Illinois</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="contacts__form">
                        <form class="form" id="contact-form" method="post" action="contact.php" novalidate="true">
                            <div class="messages"></div>
                            <div class="controls">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group has-error has-danger">
                                            <input id="form_name" type="text" name="name" placeholder="Name"
                                                   required="required">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group has-error has-danger">
                                            <input id="form_email" type="email" name="email" placeholder="Email"
                                                   required="required">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input id="form_subject" type="text" name="subject" placeholder="Subject">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group has-error has-danger">
                                    <textarea id="form_message" name="message" placeholder="Message" rows="4"
                                              required="required"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <button type="submit" class="butn butn-bg disabled"><i></i><span>Send
                                            Message</span></button>
                                    </div>
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
