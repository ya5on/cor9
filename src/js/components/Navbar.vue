<template>
    <headroom style="transition: all .7s ease">
        <header class="fixed-header">
            <div class="header-flex-box">
                <div class="logo-img-box">
                    <router-link to="/" class="logo">
                        <img src="/dist/img/logo.png" alt="">
                    </router-link>
                </div>

                <div class="header-contacts">
                    <div class="header-contacts__item">
                        <p>Веб разработка:</p>
                        <a href="tel:+380995452740"><img src="/dist/img/icon-phone.png" alt="">+38-099-545-27-40</a>
                    </div>
                    <div class="header-contacts__item">
                        <p>Контекстная реклама:</p>
                        <a href="tel:+380633837133"><img src="/dist/img/icon-phone.png" alt="">+38-063-383-71-33</a>
                    </div>
                </div>

                <div @click="open" class="menu-open">
                    <span class="hamburger"></span>
                </div>
            </div>
            <nav class="nav-container dark-bg">
                <div class="nav-logo">
                    <img src="/dist/img/logo.png" alt="">
                </div>
                <div @click="close" class="menu-close"></div>
                <ul class="nav-menu dark-bg">

                    <li class="nav-box nav-bg-change active">
                        <router-link to="/" class="nav-link">
                            <span @click="remove"  class="nav-btn active" data-text="Главная">Главная</span>
                        </router-link>
                        <div class="nav-bg" style="background-image: url(/dist/img/backgrounds/main-bg.jpg);"></div>
                    </li>
                    <li class="nav-box nav-bg-change">
                        <router-link to="/razrabotka_saytov" class="nav-link">
                            <span @click="remove" class="nav-btn" data-text="Веб разработка">Веб разработка</span>
                        </router-link>
                        <div class="nav-bg" style="background-image: url(/dist/img/backgrounds/dev-bg.jpg);"></div>
                    </li>
                    <li class="nav-box nav-bg-change">
                        <router-link to="/kontekstnaya_reklama" class=" nav-link">
                            <span @click="remove" class="nav-btn" data-text="Контекстная реклама">Контекстная реклама</span>
                        </router-link>
                        <div class="nav-bg" style="background-image: url(/dist/img/backgrounds/ppc-bg.jpg);"></div>
                    </li>
                    <li class="nav-box nav-bg-change">
                        <router-link to="/contacts" class="nav-link">
                            <span @click="remove" class="nav-btn" data-text="Контакты">Контакты</span>
                        </router-link>
                        <div class="nav-bg" style="background-image: url(/dist/img/backgrounds/contact.jpg);"></div>
                    </li>
                    <li class="nav-box nav-bg-change">
                        <router-link to="blog" class="nav-link">
                            <span @click="remove" class="nav-btn" data-text="Блог">Блог</span>
                        </router-link>
                        <div class="nav-bg" style="background-image: url(/dist/img/backgrounds/under-construct.jpg);"></div>
                    </li>
                </ul>
            </nav>
    </header>
    </headroom>
</template>

<script>
    import $ from "jquery"
    import headroom from 'vue-headroom/src/headroom.vue'

    export default {
        name: 'navbar',
        components: {
            headroom
        },
        methods: {
            open: function(){
                $('.menu-open, .nav-container').addClass('active');
            },
            close: function(){
                $('.menu-open, .nav-container').removeClass('active');
            },
            remove: function () {
                $('.menu-open, .nav-container').removeClass('active');
            },

        },
        mounted: function () {
            $(document).on('mouseover', '.nav-bg-change', function(){
                $(this).addClass('active').siblings().removeClass('active')
            });
        },
    }

</script>