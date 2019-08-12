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
                            <router-link to="/dev">
                                <span>Веб разработка</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/ppc">
                                <span>Контекстная реклама</span>
                            </router-link>
                            <ul class="footer__submenu">
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
                        </li>
                        <li>
                            <router-link to="/contact">
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
                    <a href="tel:+380995452740">+38-099-5452-740</a>
                    <a href="tel:+380633837133">+38-063-3837-133</a>
                </div>
                <div class="footer__social">
                    <a target="blank" href="tg://resolve?domain=alex_selected">tele</a>
                    <a class="viber-desktop" target="blank" href="viber://chat?number=0995452740">vibe</a>
                    <a class="viber-mobile" target="blank" href="viber://add?number=0995452740">vibe</a>
                    <a href="skype:ya5on_?chat">skype</a>
                    <a href="mailto:name@email.com">name@email.com</a>
                </div>
                <div class="footer__copyright">
                    selected
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
