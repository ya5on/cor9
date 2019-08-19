<template>
    <section class="plans">
        <div class="container-min">
            <div class="section-head">
                <div>
                    <h3>Цены</h3>
                    <span>Наши предложения:</span>
                </div>
                <i></i>
            </div>
            <div class="plans__items">
                <div class="plans__item" v-for="(plan, index) in plans">
                    <div class="plan_title">{{plan.title}}</div>
                    <div class="plan_price"><span>{{plan.price}}</span></div>
                    <ul class="list">
                        <li>{{plan.pages}}</li>
                        <li>{{plan.cms}}</li>
                        <li>{{plan.design}}</li>
                        <li>{{plan.structure}}</li>
                        <li>{{plan.serv}}</li>
                        <li>{{plan.deadline}}</li>
                    </ul>
                    <div class="plans__block-btn">
                        <router-link class="plans__btn" :to="{name: 'plan', params: { id: index } }">
                            <span>подробнее</span>
                        </router-link>
                    </div>
                </div>

                <div class="plans__item">
                    <div class="plan_title">Доп.услуги</div>
                    <div class="plan_price"><span>от 30$</span></div>
                    <ul class="list">
                        <li>Индивидуальнй дизайн от 150$</li>
                        <li>Сопровождение сайта от 30$/мес</li>
                        <li>Доработка сайта от 40$</li>
                        <li>Контекстная реклама:
                            <router-link to="/ppc">
                                перейти
                            </router-link>
                        </li>
                    </ul>
                    <div class="plans__block-btn">
                        <button @click="showModal" class="plans__btn"><span>заказать</span></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    let plans = require('../plans');


    export default {
        name: 'plans',
        components: {

        },
        data() {
            return {
                plans: plans
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
        }
    };
</script>