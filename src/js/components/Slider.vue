<template>
    <section class="home-slider">
        <div class="swiper-wrapper">
            <div class="swiper-slide flex-min-height-box home-slide">
                <div class="slide-bg second-slide" style="background-image:url(dist/img/backgrounds/dev-bg.jpg)"></div>
                <div class="home-slider-content flex-min-height-inner red-bg">
                    <div class="container flex-container">
                        <div class="six-columns six-offset-left">
                            <div class="content-left-margin-40">
                                <h2 class="slider-title-fill slider-tr-delay01 medium-title" data-text="Разработка сайтов">Разработка сайтов</h2>
                                <h3 class="large-title">
                                    <span class="slider-title-fill slider-tr-delay01" data-text="Мы создаем">Мы создаем</span><br>
                                    <span class="slider-title-fill slider-tr-delay02" data-text="креативные и">креативные и</span><br>
                                    <span class="slider-title-fill slider-tr-delay03" data-text="новаторские идеи">новаторские идеи</span>
                                </h3>
                                <div class="slider-fade slider-tr-delay07 top-margin-30">
                                    <div class="border-btn-box pointer-large">
                                        <div class="border-btn-inner">
                                            <router-link to="/dev"  class="border-btn" data-text="Узнать больше">Узнать больше</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide flex-min-height-box home-slide">
                <div class="slide-bg" style="background-image:url(dist/img/backgrounds/ppc-bg.jpg)"></div>
                <div class="home-slider-content flex-min-height-inner dark-bg">
                    <div class="container flex-container">
                        <div class="six-columns six-offset-left">
                            <div class="content-left-margin-40">
                                <h2 class="slider-overlay2 medium-title red-color">Контекстная реклама</h2>
                                <h3 class="large-title">
                                    <span class="slider-overlay2 slider-tr-delay01">лучшие решения</span><br>
                                    <span class="slider-overlay2 slider-tr-delay02">для вашего бизнеса</span><br>
                                </h3>
                                <div class="slider-fade slider-tr-delay04 top-margin-30">
                                    <div class="border-btn-box pointer-large">
                                        <div class="border-btn-inner">
                                            <router-link to="/ppc"  class="border-btn" data-text="Узнать больше">Узнать больше</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- swiper-button-next start -->
        <div class="swiper-button-next">
            <div class="slider-arrow-next-box">
                <span class="slider-arrow-next"></span>
            </div>
        </div><!-- swiper-button-next end -->
        <!-- swiper-button-prev start -->
        <div class="swiper-button-prev">
            <div class="slider-arrow-prev-box">
                <span class="slider-arrow-prev"></span>
            </div>
        </div><!-- swiper-button-prev end -->

        <!-- swiper-pagination -->
        <div class="swiper-pagination"></div>

    </section>
</template>

<script>
    import Swiper from 'swiper'
    import Anime from 'animsition'
    export default {
        name: 'slider',
        components: {
            Swiper,
            Anime
        },
        mounted: function () {
            let interleaveOffset = 0.5;
            let mySwiper = new Swiper ('.home-slider', {
                spaceBetween: 0,
                speed: 1500,
                autoplay: {
                    delay: 10000
                },
                autoHeight: true,
                watchSlidesProgress: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                on: {
                    progress: function() {
                        let swiper = this;
                        for (let i = 0; i < swiper.slides.length; i++) {
                            let slideProgress = swiper.slides[i].progress;
                            let innerOffset = swiper.width * interleaveOffset;
                            let innerTranslate = slideProgress * innerOffset;
                            swiper.slides[i].querySelector(".slide-bg").style.transform =
                                "translate3d(" + innerTranslate + "px, 0, 0)";
                        }
                    },
                    touchStart: function() {
                        let swiper = this;
                        for (let i = 0; i < swiper.slides.length; i++) {
                            swiper.slides[i].style.transition = "";
                        }
                    },
                    setTransition: function(speed) {
                        let swiper = this;
                        for (let i = 0; i < swiper.slides.length; i++) {
                            swiper.slides[i].style.transition = speed + "ms";
                            swiper.slides[i].querySelector(".slide-bg").style.transition =
                                speed + "ms";
                        }
                    }
                }
            });
        },
    };

</script>
