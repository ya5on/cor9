<template>
    <section class="dev-services">
        <div class="container-min">
            <!---------------------------------------block-------------------------------------->
            <div class="dev-services__block" v-if="plan">
                <div class="dev-services__img">
                    <img :src="plan.img" alt="">
                    <div class="dev-services__title">{{plan.title}}</div>
                </div>
                <div class="dev-services__text">
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">{{plan.mainTitle}}</div>
                        <div class="dev-services__item--text">{{plan.mainText}}</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">{{plan.title1}}</div>
                        <div class="dev-services__item--text">{{plan.text1}}</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">{{plan.titlePrice}}</div>
                        <div class="dev-services__item--text">{{plan.price}}</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">{{plan.titleDeadline}}</div>
                        <div class="dev-services__item--text">{{plan.textDeadline}}</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">{{plan.titlePages}}</div>
                        <div class="dev-services__item--text">{{plan.textPages}}</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">{{plan.titleCms}}</div>
                        <div class="dev-services__item--text">{{plan.textCms}}</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">{{plan.title2}}</div>
                        <div class="dev-services__item--text">{{plan.text2}}</div>
                    </div>
                </div>
                <div class="dev-services__order">
                    <div class="border-btn-box pointer-large">
                        <div class="border-btn-inner">
                            <button @click="showModal" data-text="Заказать" class="border-btn modal-show">Заказать
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal></Modal>
        <Footer></Footer>
    </section>
</template>

<script>
    import Order from '../components/Order'
    import Footer from '../components/Footer.vue'
    import Modal from '../components/Modal.vue'
    let plans = require('../plans');

    export default {
        name: 'landing',
        components: {
            Order,
            Footer,
            Modal,
        },
        data() {
            return {
                plan: {}
            }
        },
        mounted(){
          this.plan = this.findBySlug(this.$route.params.slug);
        },
        methods: {
            findBySlug(slug){
                for (let i = 0; i < plans.length; i++) {
                    if (slug === plans[i].slug)  return plans[i]
                }
                return null
            },
            showModal() {
                document.querySelector('.modal-wrap').classList.remove('hide');
            },
            closeModal() {
                document.querySelectorAll('.modal-wrap').forEach(function (element) {
                    element.classList.add('hide');
                });
            },
        },
    };
</script>