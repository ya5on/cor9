<template>
    <div id="dev" class="dev">
        <!-- MAIN BLOCK -->
        <section class="dev__intro parallaxie"
                 style='background: url("dist/img/dev/header.jpg")'>
            <div class="dev__content lax" data-lax-preset-large="blurOut">
                <h1>Разработка сайтов</h1>
                <h3>Одностраничные и многостраничные, креативные и корпоративные, универсальные, динамические,
                    адаптивные и готовые к использованию на всех устройствах</h3>
            </div>
            <div class="to-bottom"></div>
        </section>
        <!-- MAIN BLOCK END -->
        <!-- PLANS -->
        <plans></plans>
        <!-- PLANS END -->
        <!-- PORTFOLIO -->
        <section class="portfolio">
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
                                <img src="dist/img/examples/landing_02_Home.jpg" alt="image">
                            </div>
                        </div>
                        <!-- end single work -->
                        <!-- single work -->
                        <div class="grid-item vizitka" data-category="landing"
                             v-images-loaded:on.progress="imageProgress">
                            <div class="grid-item--img">
                                <img src="dist/img/examples/landing_02_Homepage.jpg" alt="image">
                            </div>
                        </div>
                        <!-- end single work -->
                        <!-- single work -->
                        <div class="grid-item landing" data-category="landing"
                             v-images-loaded:on.progress="imageProgress">
                            <div class="grid-item--img">
                                <img src="dist/img/examples/landing_03_Home.jpg" alt="image">
                            </div>
                        </div>
                        <!-- end single work -->
                        <!-- single work -->
                        <div class="grid-item corp" data-category="landing"
                             v-images-loaded:on.progress="imageProgress">
                            <div class="grid-item--img">
                                <img src="dist/img/examples/landing_VERSION_01.jpg" alt="image">
                            </div>
                        </div>
                        <!-- end single work -->
                        <!-- single work -->
                        <div class="grid-item catalog" data-category="catalog"
                             v-images-loaded:on.progress="imageProgress">
                            <div class="grid-item--img">
                                <img src="dist/img/examples/catalog_05_Home.jpg" alt="image">
                            </div>
                        </div>
                        <!-- end single work -->
                        <!-- single work -->
                        <div class="grid-item blog" data-category="blog"
                             v-images-loaded:on.progress="imageProgress">
                            <div class="grid-item--img">
                                <img src="dist/img/examples/blog_05_Single Blog.jpg" alt="image">
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
                            <router-link to="/ppc">
                                заказать рекламную кампанию
                            </router-link>
                            в <strong>Google Ads</strong>, для привлечения новых, потенциальных клиентов. Это позволит получить
                            целевых клиентов уже сегодня.&nbsp;
                        </p>
                        <p><strong>Контекстная реклама</strong> идеально подходит для рекламы бизнеса, она создается исключительно под целевую аудиторию.
                            Потребитель зашедший на сайт будет полностью поглощен и заинтересован Вашим предложением,
                            вероятность того что он станет Вашим клиентом в разы выше <strong>чем на других сайтах</strong>.
                            Поскольку мы создали более сотни рекламных кампаний, и знаем на что нужно делать упор, мы готовы
                            настроить рекламную кампанию исходя из особенностей Вашего бизнеса.</p>
                    </div>
                </div>

            </div>
        </section>
        <!-- GOOADS END -->
        <back-to-top bottom="50px" right="50px" visibleoffset="700">
            <img class="btn-to-top" src="dist/img/topBtn.png" alt="">
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
    import Parallax from '../../libs/parallaxie'
    import lax from 'lax.js'
    import Plans from '../components/Plans'


    export default {
        name: 'dev',
        components: {
            Plans,
            Order,
            Footer,
            Modal,
            BackToTop,
            Parallax,
            Isotope,
            lax
        },
        directives: {
            imagesLoaded
        },

        data() {
            return {
                isotope: null
            }
        },
        created(){
            window.onload = function() {
                lax.setup({
                    breakpoints: { small: 0, large: 992 }
                }); // init

                const updateLax = () => {
                    lax.update(window.scrollY);
                    window.requestAnimationFrame(updateLax)
                };

                window.requestAnimationFrame(updateLax)
            }
        },

        mounted() {
            // initialize parallaxie
            $('.parallaxie').parallaxie({speed: 0.5,});
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
