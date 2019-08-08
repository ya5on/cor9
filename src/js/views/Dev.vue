<template>
    <div id="dev" class="dev">
        <section class="dev__intro parallaxie" data-parallaxie='{"size": "cover"}'
                 style='background: url("dist/img/dev/header.jpg")'>
            <div class="dev__content">
                <h1>Create Better Websites</h1>
                <h3>One Page and Multi Page Parallax HTML5 Template, Creative and Corporate Multi-purpose, Responsive
                    and Retina Ready for All Devices.</h3>
            </div>
            <div class="to-bottom"></div>
        </section>

        <section class="plans">
            <div class="container-min">
                <div class="plans__title">
                    <h2>pricing plans</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="plans__items">
                    <div class="plans__item">
                        <div class="plan_title">landing-page</div>
                        <div class="plan_price">$35.99 monthly</div>
                        <ul class="list">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetuer adipiscing elit</li>
                            <li>Sed diam nonummy</li>
                            <li>Nibh euismod tincidunt</li>
                            <li>Ut laoreet dolore</li>
                            <li>Magna aliquam erat volutpat</li>
                        </ul>
                        <router-link class="plans__btn" to="/dev/landing">
                            <span>get started</span>
                        </router-link>
                    </div>

                    <div class="plans__item">
                        <div class="plan_title">сайт-визитка</div>
                        <div class="plan_price">$35.99 monthly</div>
                        <ul class="list">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetuer adipiscing elit</li>
                            <li>Sed diam nonummy</li>
                            <li>Nibh euismod tincidunt</li>
                            <li>Ut laoreet dolore</li>
                            <li>Magna aliquam erat volutpat</li>
                        </ul>
                        <router-link class="plans__btn" to="/dev/vizitka">
                            <span>get started</span>
                        </router-link>
                    </div>

                    <div class="plans__item">
                        <div class="plan_title">корпоративный</div>
                        <div class="plan_price">$35.99 monthly</div>
                        <ul class="list">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetuer adipiscing elit</li>
                            <li>Sed diam nonummy</li>
                            <li>Nibh euismod tincidunt</li>
                            <li>Ut laoreet dolore</li>
                            <li>Magna aliquam erat volutpat</li>
                        </ul>
                        <router-link class="plans__btn" to="/dev/corporate">
                            <span>get started</span>
                        </router-link>
                    </div>

                    <div class="plans__item">
                        <div class="plan_title">интернет-каталог</div>
                        <div class="plan_price">$35.99 monthly</div>
                        <ul class="list">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetuer adipiscing elit</li>
                            <li>Sed diam nonummy</li>
                            <li>Nibh euismod tincidunt</li>
                            <li>Ut laoreet dolore</li>
                            <li>Magna aliquam erat volutpat</li>
                        </ul>
                        <router-link class="plans__btn" to="/dev/catalog">
                            <span>get started</span>
                        </router-link>
                    </div>

                    <div class="plans__item">
                        <div class="plan_title">блог/портфолио</div>
                        <div class="plan_price">$35.99 monthly</div>
                        <ul class="list">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetuer adipiscing elit</li>
                            <li>Sed diam nonummy</li>
                            <li>Nibh euismod tincidunt</li>
                            <li>Ut laoreet dolore</li>
                            <li>Magna aliquam erat volutpat</li>
                        </ul>
                        <router-link class="plans__btn" to="/dev/portfolio">
                            <span>get started</span>
                        </router-link>
                    </div>

                    <div class="plans__item">
                        <div class="plan_title">техподдержка</div>
                        <div class="plan_price">$35.99 monthly</div>
                        <ul class="list">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetuer adipiscing elit</li>
                            <li>Sed diam nonummy</li>
                            <li>Nibh euismod tincidunt</li>
                            <li>Ut laoreet dolore</li>
                            <li>Magna aliquam erat volutpat</li>
                        </ul>
                        <a href="#" class="plans__btn"><span>get started</span></a>
                    </div>
                </div>
            </div>
        </section>


        <!-- PORTFOLIO -->
        <section class="portfolio">
            <div class="container-min">
                <div class="plans__title">
                    <h2>our portfolio</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <!-- categories  -->
                <div class="portfolio__items">
                    <div class="portfolio__item--1">
                        <div class="categories-grid">
                            <span>choose <br>category</span>
                            <div class="button-group filters-button-group">
                                <button class="button is-checked" data-filter="*">all</button>
                                <button class="button" data-filter=".landing">landing</button>
                                <button class="button" data-filter=".vizitka">визитка</button>
                                <button class="button" data-filter=".corp">корпоративный</button>
                                <button class="button" data-filter=".catalog">каталог</button>
                                <button class="button" data-filter=".blog">блог</button>
                                <button class="button" data-filter=".portfolio-1">портфолио</button>
                            </div>
                        </div>
                    </div>

                    <!-- all works -->
                    <div class="portfolio__item--2 grid">
                            <!-- single work -->
                            <div class="grid-item landing" data-filter="landing">
                                <p>landing</p>
                                <img src="dist/img/portfolio/work-2.jpg" alt="image">
                            </div>
                            <!-- end single work -->

                            <!-- single work -->
                            <div class="grid-item vizitka" data-filter="vizitka">
                                <p>vizitka</p>
                                <img src="dist/img/portfolio/work-1.jpg" alt="image">
                            </div>
                            <!-- end single work -->

                            <!-- single work -->
                            <div class="grid-item corp" data-filter="corp">
                                <p>corp</p>
                                <img src="dist/img/portfolio/work-3.jpg" alt="image">
                            </div>
                            <!-- end single work -->

                            <!-- single work -->
                            <div class="grid-item catalog" data-filter="catalog">
                                <p>catalog</p>
                                <img src="dist/img/portfolio/work-1.jpg" alt="image">
                            </div>
                            <!-- end single work -->

                            <!-- single work -->
                            <div class="grid-item blog" data-filter="blog">
                                <p>blog</p>
                                <img src="dist/img/portfolio/work-3.jpg" alt="image">
                            </div>
                            <!-- end single work -->

                            <!-- single work -->
                            <div class="grid-item portfolio-1" data-filter="portfolio-1">
                                <p>port</p>
                                <img src="dist/img/portfolio/work-1.jpg" alt="image">
                            </div>
                            <!-- end single work -->
                            <div class="grid-item landing" data-filter="landing">
                                <p>landing</p>
                                <img src="dist/img/portfolio/work-3.jpg" alt="image">
                            </div>
                            <!-- end single work -->

                            <!-- single work -->
                            <div class="grid-item vizitka" data-filter="vizitka">
                                <p>vizitka</p>
                                <img src="dist/img/portfolio/work-1.jpg" alt="image">
                            </div>
                            <!-- end single work -->

                            <!-- single work -->
                            <div class="grid-item corp" data-filter="corp">
                                <p>corp</p>
                                <img src="dist/img/portfolio/work-3.jpg" alt="image">
                            </div>
                            <!-- end single work -->

                            <!-- single work -->
                            <div class="grid-item catalog" data-filter="catalog">
                                <p>catalog</p>
                                <img src="dist/img/portfolio/work-1.jpg" alt="image">
                            </div>
                            <!-- end single work -->

                            <!-- single work -->
                            <div class="grid-item blog" data-filter="blog">
                                <p>blog</p>
                                <img src="dist/img/portfolio/work-3.jpg" alt="image">
                            </div>
                            <!-- end single work -->

                            <!-- single work -->
                            <div class="grid-item portfolio-1" data-filter="portfolio-1">
                                <p>port</p>
                                <img src="dist/img/portfolio/work-1.jpg" alt="image">
                            </div>
                            <!-- end single work -->
                        <!-- end row -->
                    </div>
                </div>
                <!-- all works end -->
            </div>
            <!-- end container -->
        </section>
        <!-- portfolio -->
        <section class="order-block">
            <div class="container-min">
                <order></order>
            </div>
        </section>
        <section class="googleadword">
            <div class="container">
                <img src="dist/img/googleadwordss.jpg" alt="" title="Реклама в Google Ads">
                <h3>Реклама в Google&nbsp;Ads&nbsp;</h3>
                <p>После создания сайта рекомендуем
                    <router-link to="/ppc">
                        заказать рекламную кампанию
                    </router-link>
                    в <strong>Goolge Ads</strong>, для привлечения новых, потенциальных клиентов. Это позволит получить
                    целевых клиентов уже сегодня.&nbsp;
                </p>
                <p class="hidden">Запуск рекламной компании для бизнеса идеально подходит <strong>для контекстной
                    рекламы</strong>, собственно для этого он и создается, исключительно под целевую аудиторию.
                    Потребитель зашедший на сайт будет полностью поглощен и заинтересован Вашим предложением,
                    вероятность того что он станет Вашим клиентом в разы выше <strong>чем на других сайтах</strong>.
                    Поскольку мы создали более сотни рекламных кампаний, и знаем на что нужно делать упор, мы готовы
                    настроить рекламную кампанию исходя из особенностей Вашего бизнеса.</p>
            </div>
        </section>
        <back-to-top bottom="50px" right="50px" visibleoffset="700">
            <img class="btn-to-top" src="dist/img/topBtn.png" alt="">
        </back-to-top>
        <Modal></Modal>
        <Footer></Footer>
    </div>
</template>

<script>
    import Isotope from 'isotope-layout'
    import Order from '../components/Order'
    import Footer from '../components/Footer.vue'
    import Modal from '../components/Modal.vue'
    import BackToTop from 'vue-backtotop'
    import Parallax from '../../libs/parallaxie'



    export default {
        name: 'dev',
        components: {
            Order,
            Footer,
            Modal,
            BackToTop,
            Parallax,
            Isotope
        },

        data () {
          return {
              isotope: null
          }
        },

        mounted() {
            // initialize parallaxie
            $('.parallaxie').parallaxie({speed: 0.5,});

            this.layoutTheGrid();
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

            layoutTheGrid(){
                setTimeout(() => {
                    let elem = document.querySelector('.grid');
                    let isotope = new Isotope(elem, {
                        itemSelector: '.grid-item',
                        layoutMode: 'masonry',
                        // getSortData: {
                        //     filter: '*'
                        // },
                    });
                    // bind filter button click
                    let filtersElem = document.querySelector('.filters-button-group');
                    filtersElem.addEventListener( 'click', function( event ) {
                        let filterValue = event.target.getAttribute('data-filter');
                        // use matching filter function
                        isotope.arrange({ filter: filterValue });
                    });

                    // change is-checked class on buttons
                    let buttonGroups = document.querySelectorAll('.button-group');
                    for ( let i=0, len = buttonGroups.length; i < len; i++ ) {
                        let buttonGroup = buttonGroups[i];
                        radioButtonGroup( buttonGroup );
                    }

                    function radioButtonGroup( buttonGroup ) {
                        buttonGroup.addEventListener( 'click', function( event ) {
                            buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
                            event.target.classList.add('is-checked');
                        });
                    }
                },1);

            }
        },
    };
</script>
