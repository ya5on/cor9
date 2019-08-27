<template>
    <div id="dev" class="dev">
        <!-- MAIN BLOCK -->
        <section class="dev__intro parallaxie" style='background-image: url("/dist/img/dev/header.jpg")'>
            <div class="dev__content">
                <h1 class="head-h1">Разработка сайтов</h1>
                <h3 class="head-h3">Одностраничные и многостраничные, креативные и корпоративные, универсальные,
                    динамические,
                    адаптивные и готовые к использованию на всех устройствах</h3>
<!--                <button class="head-btn" id="section1Btn">кейсы</button>-->
<!--                <button class="head-btn-2" id="section2Btn">портфолио</button>-->
            </div>
            <div class="to-bottom"></div>
        </section>
        <!-- MAIN BLOCK END -->
        <!-- PLANS -->
        <plans id="plans"></plans>
        <!-- PLANS END -->
        <!-- PORTFOLIO -->
        <section class="portfolio" id="portfolio">
            <div class="container-min">
                <!-- categories  -->
                <div class="portfolio__items">
                    <div class="portfolio__item--1">
                        <div class="section-head">
                            <div>
                                <h3>Портфолио</h3>
                                <span>Категории:</span>
                            </div>
                            <i></i>
                        </div>
                        <ul class="button-group filters-button-group">
                            <li>
                                <span class="button is-checked" data-filter="*">all</span>
                            </li>
                            <li>
                                <span class="button" data-filter=".landing">landing</span>
                            </li>
                            <li>
                                <span class="button" data-filter=".vizitka">визитка</span>
                            </li>
                            <li>
                                <span class="button" data-filter=".corp">корпоративный</span>
                            </li>
                            <li>
                                <span class="button" data-filter=".catalog">каталог</span>
                            </li>
                            <li>
                                <span class="button" data-filter=".blog">блог</span>
                            </li>
                            <li>
                                <span class="button" data-filter=".portfolio-1">портфолио</span>
                            </li>
                        </ul>
                    </div>

                    <!-- all works -->
                    <div class="portfolio__item--2 grid">
                        <!-- single work -->
                        <div class="grid-item landing" data-category="landing"
                             v-images-loaded:on.progress="imageProgress">
                            <div class="grid-item--img">
                                <img src="/dist/img/examples/landing_02_Home.jpg" alt="image">
                            </div>
                        </div>
                        <!-- end single work -->
                        <!-- single work -->
                        <div class="grid-item vizitka" data-category="landing"
                             v-images-loaded:on.progress="imageProgress">
                            <div class="grid-item--img">
                                <img src="/dist/img/examples/landing_02_Homepage.jpg" alt="image">
                            </div>
                        </div>
                        <!-- end single work -->
                        <!-- single work -->
                        <div class="grid-item landing" data-category="landing"
                             v-images-loaded:on.progress="imageProgress">
                            <div class="grid-item--img">
                                <img src="/dist/img/examples/landing_03_Home.jpg" alt="image">
                            </div>
                        </div>
                        <!-- end single work -->
                        <!-- single work -->
                        <div class="grid-item corp" data-category="landing"
                             v-images-loaded:on.progress="imageProgress">
                            <div class="grid-item--img">
                                <img src="/dist/img/examples/landing_VERSION_01.jpg" alt="image">
                            </div>
                        </div>
                        <!-- end single work -->
                        <!-- single work -->
                        <div class="grid-item catalog" data-category="catalog"
                             v-images-loaded:on.progress="imageProgress">
                            <div class="grid-item--img">
                                <img src="/dist/img/examples/catalog_05_Home.jpg" alt="image">
                            </div>
                        </div>
                        <!-- end single work -->
                        <!-- single work -->
                        <div class="grid-item blog" data-category="blog"
                             v-images-loaded:on.progress="imageProgress">
                            <div class="grid-item--img">
                                <img src="/dist/img/examples/blog_05_Single Blog.jpg" alt="image">
                            </div>
                        </div>
                        <!-- end single work -->
                    </div>
                </div>
                <!-- all works end -->
            </div>
            <!-- end container -->
        </section>
        <!-- portfolio -->
        <!-- ORDER -->
        <section class="order-block">
            <div class="container-min">
                <order></order>
            </div>
        </section>
        <!-- ORDER END -->
        <!-- GOOADS -->
        <section class="ads">
            <div class="container-min">
                <div class="ads__items">
                    <div class="ads__item">
                        <div class="section-head">
                            <div>
                                <h3>Реклама</h3>
                                <span><span class="blue">G</span>
                                    <span class="red">o</span>
                                    <span class="yellow">o</span>
                                    <span class="blue">g</span>
                                    <span class="green">l</span>
                                    <span class="red">e</span>&nbsp;ADS</span>
                            </div>
                            <i></i>
                        </div>
                    </div>
                    <div class="ads__text">
                        <p>После создания сайта рекомендуем
                            <router-link to="/kontekstnaya_reklama">
                                заказать рекламную кампанию
                            </router-link>
                            в <strong>Google Ads</strong>, для привлечения новых, потенциальных клиентов. Это позволит
                            получить
                            целевых клиентов уже сегодня.&nbsp;
                        </p>
                        <p><strong>Контекстная реклама</strong> идеально подходит для рекламы бизнеса, она создается
                            исключительно под целевую аудиторию.
                            Потребитель зашедший на сайт будет полностью поглощен и заинтересован Вашим предложением,
                            вероятность того что он станет Вашим клиентом в разы выше <strong>чем на других
                                сайтах</strong>.
                            Поскольку мы создали более сотни рекламных кампаний, и знаем на что нужно делать упор, мы
                            готовы
                            настроить рекламную кампанию исходя из особенностей Вашего бизнеса.</p>
                    </div>
                </div>

            </div>
        </section>
        <!-- GOOADS END -->
        <back-to-top bottom="50px" right="50px" visibleoffset="500">
            <img class="btn-to-top" src="/dist/img/topBtn.png" alt="">
        </back-to-top>
        <Modal></Modal>
        <Footer></Footer>
    </div>
</template>

<script>
    import Isotope from 'isotope-layout'
    import imagesLoaded from 'vue-images-loaded'
    import Order from '../components/Order'
    import Footer from '../components/Footer.vue'
    import Modal from '../components/Modal.vue'
    import BackToTop from 'vue-backtotop'
    import Plans from '../components/Plans'
    import {TimelineMax} from 'gsap'
    import ScrollToPlugin from "gsap/ScrollToPlugin"
    import Parallaxie from '../../libs/parallaxie'


    export default {
        name: 'dev',
        components: {
            Plans,
            Order,
            Footer,
            Modal,
            BackToTop,
            Isotope,
            TimelineMax,
            ScrollToPlugin,
            Parallaxie,
        },
        directives: {
            imagesLoaded
        },

        data() {
            return {
                isotope: null,
            }
        },

        mounted() {
            //GSAP
            let tl = new TimelineMax();
            tl.fromTo('.head-h1', 1.5, {y: -100, opacity: 0}, {y: 0, opacity: 1});
            tl.fromTo('.head-h3', 0.5, {y: 100, opacity: 0}, {y: 0, opacity: 1});
            // tl.fromTo('.head-btn', 0.5, {y: 100, opacity: 0}, {y: 0, opacity: 1});
            // tl.fromTo('.head-btn-2', 0.5, {y: 100, opacity: 0}, {y: 0, opacity: 1});
            tl.fromTo('.to-bottom', 0.5, {x: -100, opacity: 0}, {x: 0, opacity: 1});

            //scrollTo
            // let section1Btn = document.getElementById("section1Btn");
            // let section2Btn = document.getElementById("section2Btn");
            // section1Btn.onclick = function () {
            //     TweenLite.to(window, 1, {scrollTo: {y: "#plans", offsetY: 0, autoKill: false}});
            // };
            // section2Btn.onclick = function () {
            //     TweenLite.to(window, 1, {scrollTo: {y: "#portfolio", offsetY: 0, autoKill: false}});
            // };
            if ($(window).width() > 991) {
                $('.parallaxie').parallaxie();
            }
        },

        methods: {
            showModal() {
                document.querySelector('.modal-wrap').classList.remove('hide');
            },
            closeModal() {
                document.querySelectorAll('.modal-wrap').forEach(function (element) {
                    element.classList.add('hide');
                });
            },
            layoutTheGrid() {
                setTimeout(() => {
                    let elem = document.querySelector('.grid');
                    let isotope = new Isotope(elem, {
                        itemSelector: '.grid-item',
                        layoutMode: 'masonry'
                    });
                    // bind filter button click
                    let filtersElem = document.querySelector('.filters-button-group');
                    filtersElem.addEventListener('click', function (event) {
                        let filterValue = event.target.getAttribute('data-filter');
                        // use matching filter function
                        isotope.arrange({filter: filterValue});
                    });
                    // change is-checked class on buttons
                    $('.button').click(function () {
                        $('.button.is-checked').removeClass('is-checked');
                        $(this).addClass('is-checked');
                    });
                }, 1);
            },
            imageProgress(instance, image) {
                const result = image.isLoaded ? 'loaded' : 'broken';
                // console.log( 'image is ' + result + ' for ' + image.img.src );
                this.layoutTheGrid();
            }
        },
    };
</script>
