<template>
    <div class="ppc">
        <section class="ppc__inner">
            <div class="container-min">
                <div class="ppc__main">
                    <div class="ppc__main--item">
                        <div class="text-padding">
                            <h1>Добейтесь успеха в бизнесе с помощью Google Ads</h1>
                            <div class="btn-box">
                                <div class="border-btn-box pointer-large">
                                    <div class="border-btn-inner">
                                        <button @click="showModal" data-text="Заказать" class="border-btn modal-show">
                                            Заказать
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ppc__main--item hidden">
                        <img src="/dist/img/ppc/ppc-main.jpg" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section class="services">
            <div class="container-min">
                <div class="services__header">
                    <h2>Наши сервисы</h2>
                </div>
                <div class="services__block">
                    <div class="services__item">
                        <img src="/dist/img/ppc/icon-create-campaign.svg" alt="">
                        <div class="services__text">
                            <h4>Настройка</h4>
                            <p>Получить профессиональную рекламу всего за несколько кликов</p>
                            <p><strong>Цена от 200$</strong></p>
                            <router-link to="/kontekstnaya_reklama/nastroyka">
                                Узнать больше
                            </router-link>
                        </div>
                    </div>
                    <div class="services__item">
                        <img src="/dist/img/ppc/icon-connect.svg" alt="">
                        <div class="services__text">
                            <h4>Сопровождение</h4>
                            <p>Оптимизация настроек кампании, контроль и корректировка</p>
                            <p><strong>Цена от 150$</strong></p>
                            <router-link to="/kontekstnaya_reklama/soprovozhdeniye">
                                Узнать больше
                            </router-link>
                        </div>
                    </div>
                    <div class="services__item">
                        <img src="/dist/img/ppc/icon-automate-ads.svg" alt="">
                        <div class="services__text">
                            <h4>Аудит</h4>
                            <p>Анализ эффективности рекламных кампаний</p>
                            <p><strong>Цена от 95$</strong></p>
                            <router-link to="/kontekstnaya_reklama/audit">
                                Узнать больше
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--------------------------------------------CREATE----------------------------------------->
        <section class="create">
            <div class="container-min">
                <div class="ppc__main">
                    <div class="ppc__main--item">
                        <div class="text-padding">
                            <h2>Настройка аккаунта Google Ads</h2>
                            <ul>
                                <li>Определение целей Вашей рекламной кампании в Google Ads</li>
                                <li>Подбор ключевых слов</li>
                                <li>Настройка рекламных кампаний</li>
                                <li>Составление текстов объявлений и Настройка расширений объявлений</li>
                                <li>Связь аккаунтов Google Ads и Google Analytics</li>
                                <li>Настройка расширений Google Ads</li>
                            </ul>
                            <router-link to="/kontekstnaya_reklama/nastroyka">
                                Узнать больше
                            </router-link>
                        </div>
                    </div>
                    <div class="ppc__main--item hidden">
                        <img src="/dist/img/ppc/trackdata.jpg" alt="">
                    </div>
                </div>
            </div>
        </section>

        <!----------------------------------------------CONNECT-------------------------------------->
        <section class="connect">
            <div class="container-min">
                <div class="ppc__main">
                    <div class="ppc__main--item hidden">
                        <img src="/dist/img/ppc/illustration-reporting-overview.svg" alt="">
                    </div>
                    <div class="ppc__main--item">
                        <div class="text-padding">
                            <h2>Сопровождение аккаунтов</h2>
                            <ul>
                                <li>Следим за бюджетом</li>
                                <li>Следим за трафиком</li>
                                <li>Отслеживаем поведение посетителей с рекламы на сайте</li>
                                <li>Тестируем тексты объявлений</li>
                                <li>Повышаем показатель качества ключевых слов</li>
                                <li>Работаем над ставками ключевых слов</li>
                                <li>Общаемся с поддержкой Google Ads</li>
                            </ul>
                            <router-link to="/kontekstnaya_reklama/soprovozhdeniye">
                                Узнать больше
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!----------------------------------------------AUDIT-------------------------------------->
        <section class="audit">
            <div class="container-min">
                <div class="ppc__main">
                    <div class="ppc__main--item">
                        <div class="text-padding">
                            <h2>Аудит</h2>
                            <ul>
                                <li>Анализ корректности настройки аккаунта</li>
                                <li>Группы объявлений</li>
                                <li>Ключевые слова</li>
                                <li>Наличие минус-слов и перекрестной минусовки</li>
                                <li>Релевантны ли объявления ключевым словам</li>
                                <li>Отслеживание конверсий</li>
                                <li>Определение причины спада эффективности</li>
                                <li>Стратегия по оптимизации рекламной кампании</li>
                                <li>Рекомендации по подключению дополнительных инструментов</li>
                            </ul>
                            <router-link to="/kontekstnaya_reklama/audit">
                                Узнать больше
                            </router-link>
                        </div>
                    </div>
                    <div class="ppc__main--item hidden">
                        <img src="/dist/img/ppc/illustration-reporting-performance.svg" alt="">
                    </div>
                </div>
            </div>
        </section>
        <div class="container-min">
            <PpcOrder></PpcOrder>
        </div>
        <back-to-top bottom="50px" right="50px" visibleoffset="700">
            <img class="btn-to-top" src="/dist/img/topBtn.png" alt="">
        </back-to-top>
        <G_Modal></G_Modal>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from '../components/Footer'
    import PpcOrder from '../components/OrderPPC'
    import G_Modal from '../components/ModalPPC.vue'
    import BackToTop from 'vue-backtotop'

    export default {
        name: 'ppc',
        components: {
            Footer,
            PpcOrder,
            G_Modal,
            BackToTop
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
        },
    };
</script>
