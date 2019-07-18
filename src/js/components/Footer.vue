<template>
    <section class="footer">
        <div class="container-min">
            <div class="footer__content">
                <div class="footer__item">
                    <p class="footer__title">Контакты</p>
                    <div class="footer__contacts">
                        <div class="footer__contacts--item">
                            <p>Контекстная реклама:</p>
                            <div class="social">
                                <img src="dist/img/icon-phone.png" alt="">
                                <a href="tel:+380633837133">(063) 383-71-33</a>
<!--                                <a title="Telegram" href="tg://resolve?domain=">-->
<!--                                    <i class="fa fa-telegram" aria-hidden="true"></i>-->
<!--                                </a>-->
<!--                                <a title="fb messenger" target="_blank" href="https://www.messenger.com/t/komarchuk">-->
<!--                                    <i class="fa fa-facebook" aria-hidden="true"></i>-->
<!--                                </a>-->
<!--                                <a title="Skype" href="skype:ya5on_?chat">-->
<!--                                    <i class="fa fa-skype" aria-hidden="true"></i>-->
<!--                                </a>-->
                            </div>
                        </div>
                        <div class="footer__contacts--item">
                            <p>Веб разработка:</p>
                            <div class="social">
                                <img src="dist/img/icon-phone.png" alt="">
                                <a href="tel:+380995452740">(099) 545-27-40</a>
<!--                                <a title="Telegram" href="tg://resolve?domain=mnemalo">-->
<!--                                    <i class="fa fa-telegram" aria-hidden="true"></i>-->
<!--                                </a>-->
<!--                                <a title="Skype" href="skype:ya5on_?chat">-->
<!--                                    <i class="fa fa-skype" aria-hidden="true"></i>-->
<!--                                </a>-->
<!--                                <a href="mailto:spaunfrom@gmail.com?subject=Веб-разарботка">-->
<!--                                    <i class="fa fa-envelope-o" aria-hidden="true"></i>-->
<!--                                </a>-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer__item">
                    <p class="footer__title">Навигация</p>
                    <div class="footer__navigation">
                        <ul>
                            <li>
                                <router-link to="/">
                                    <span>home</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/dev">
                                    <span>dev</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/ppc">
                                    <span>ppc</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/contact">
                                    <span>Contacts</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/404">
                                    <span>Blog</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/ppc/create">
                                    <span>Настройка</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/ppc/connect">
                                    <span>Сопровождение</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/ppc/audit">
                                    <span>Аудит</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__item footer__copy">
                    <div class="footer__logo">
                        <h2>logo</h2>
                    </div>
                    <div class="footer__copyright">
                        <p>©{{ new Date().getFullYear() }} Создание, продвижение и поддержка сайтов.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        name: 'Footer',
        components: {

        }
    };
</script>
