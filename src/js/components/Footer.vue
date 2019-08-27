<template>
    <section class="footer">
        <div class="container-min">
            <div class="footer__content">
                <div class="footer__navigation">
                    <ul>
                        <li>
                            <router-link to="/">
                                <span>Главная</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/razrabotka_saytov">
                                <span>Веб разработка</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/kontekstnaya_reklama">
                                <span>Контекстная реклама</span>
                            </router-link>
                            <ul class="footer__submenu">
                                <li>
                                    <router-link to="/kontekstnaya_reklama/nastroyka">
                                        <span>Настройка</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/kontekstnaya_reklama/soprovozhdeniye">
                                        <span>Сопровождение</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/kontekstnaya_reklama/audit">
                                        <span>Аудит</span>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="/contacts">
                                <span>Контакты</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/404">
                                <span>Блог</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="footer__contacts">
                    <a href="tel:+380995452740">+38-099-545-27-40</a>
                    <a href="tel:+380633837133">+38-063-383-71-33</a>
                </div>
                <div class="footer__social">
                    <a target="_blank" href="https://t.me/alex_cor9" title="telegram">
                        <img src="/dist/img/footer/telegram.svg" alt="">
                    </a>
                    <a class="viber-desktop" target="_blank" href="viber://chat?number=+380995452740" title="viber">
                        <img src="/dist/img/footer/viber.svg" alt="">
                    </a>
                    <a class="viber-mobile" target="_blank" href="viber://add?number=+380995452740" title="viber">
                        <img src="/dist/img/footer/viber.svg" alt="">
                    </a>
                    <a href="skype:ya5on_?chat" title="skype">
                        <img src="/dist/img/footer/skype.svg" alt="">
                    </a>
                    <a href="mailto:info@cor9.pro" title="email">
                        <img src="/dist/img/footer/email.svg" alt="">
                    </a>
                </div>
                <div class="footer__copyright">
                    <div class="logo-img-box">
                        <router-link to="/" class="logo">
                            <img src="/dist/img/logo.png" alt="">
                        </router-link>
                    </div>
                    <p>©{{ new Date().getFullYear() }} Создание, продвижение и поддержка сайтов.</p>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: 'Footer',
        components: {}
    };
</script>
