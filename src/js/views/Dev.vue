<template>
    <div id="dev" class="dev">
        <section class="dev__intro">
            <div class="dev__content">
                <h1>РАЗРАБОТКА И СОЗДАНИЕ САЙТОВ</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, est, similique? Error, quisquam sed! Animi dolor, ipsum iste laboriosam necessitatibus odit provident quis ratione rem sapiente? Adipisci animi asperiores aspernatur culpa, cum dolores id illum iure libero maiores numquam pariatur perspiciatis porro quasi quis quos reiciendis similique voluptatibus? Dicta, voluptatem!</p>
            </div>
            <div class="to-bottom"></div>
        </section>
        <section class="services">
            <div class="container-min">
                <div class="services__block">
                    <div class="services__left">
                        <div class="services__img">
                            <img src="dist/img/dev/landing-page.png" alt="">
                        </div>
                    </div>
                    <div class="services__right">
                        <div class="services__text">
                            <div class="services__title">Landing page</div>
                            <div class="services__item">
                                <div class="services__item--title">Главное</div>
                                <div class="services__item--text">оригинально презентовать товар, услугу, компанию&nbsp;или акцию</div>
                            </div>
                            <div class="services__item">
                                <div class="services__item--title">Действия</div>
                                <div class="services__item--text">заявка → обсуждение идеи →  подбор дизайна → верстка → программирование → тестирование → запуск → рекомендации по дальнейшему продвижению</div>
                            </div>
                            <div class="services__item">
                                <div class="services__item--title">Сроки выполнения:</div>
                                <div class="services__item--text">от 7 до 14 дней</div>
                            </div>
                            <div class="services__item">
                                <div class="services__item--title">Цена:</div>
                                <div class="services__item--text">от 350$</div>
                            </div>
                            <div class="services__item">
                                <div class="services__item--title">Пример обращения клиента:</div>
                                <div class="services__item--text">необходимо создать яркий и содержательный лендинг для Школы иностранных языков, презентовать варианты обучения и дать возможность онлайн записи на курс и&nbsp;получение консультации&nbsp;в чате</div>
                            </div>
                            <div class="services__order">
                                <div class="border-btn-box pointer-large">
                                    <div class="border-btn-inner">
                                        <button @click="showModal" data-text="Заказать" class="border-btn modal-show">Заказать</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="services__block">
                    <div class="services__left violet-color">
                        <div class="services__img">
                            <img src="dist/img/dev/vizitka.png" alt="">
                        </div>
                    </div>
                    <div class="services__right">
                        <div class="services__text">
                            <div class="services__title">Сайт визитка</div>
                            <div class="services__item">
                                <div class="services__item--title">Главное</div>
                                <div class="services__item--text">выгодно и лаконично представить компанию в сети Интернет</div>
                            </div>
                            <div class="services__item">
                                <div class="services__item--title">Действия</div>
                                <div class="services__item--text">заявка → обсуждение идеи → подбор дизайна → верстка → программирование → наполнение → тестирование → обучение работы с сайтом → запуск → рекомендации по дальнейшему продвижению</div>
                            </div>
                            <div class="services__item">
                                <div class="services__item--title">Сроки выполнения:</div>
                                <div class="services__item--text">от 7 до 14 дней</div>
                            </div>
                            <div class="services__item">
                                <div class="services__item--title">Цена:</div>
                                <div class="services__item--text">от 500$</div>
                            </div>
                            <div class="services__item">
                                <div class="services__item--title">Пример обращения клиента:</div>
                                <div class="services__item--text">нужно создать солидный сайт для адвоката. Важно максимально заинтересовать и обеспечить запоминаемость у клиентов. Вызвать доверие.</div>
                            </div>
                            <div class="services__order">
                                <div class="border-btn-box pointer-large">
                                    <div class="border-btn-inner">
                                        <button @click="showModal" data-text="Заказать" class="border-btn modal-show">Заказать</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="services__block">
                    <div class="services__left blue-color">
                        <div class="services__img">
                            <img src="dist/img/dev/envelope.png" alt="">
                        </div>
                    </div>
                    <div class="services__right">
                        <div class="services__text">
                            <div class="services__title">Корпоративный</div>
                            <div class="services__item">
                                <div class="services__item--title">Главное</div>
                                <div class="services__item--text">предоставить всю информацию о деятельности компании, ее структуре, товарах, услугах с целью расширения рынка сбыта, привлечения партнёров, инвесторов, формирования позитивного имиджа компании в сети Интернет</div>
                            </div>
                            <div class="services__item">
                                <div class="services__item--title">Действия</div>
                                <div class="services__item--text">заявка → обсуждение идеи → подбор дизайна → верстка → программирование → наполнение → тестирование → обучение работы с сайтом → запуск → рекомендации по дальнейшему продвижению</div>
                            </div>
                            <div class="services__item">
                                <div class="services__item--title">Сроки выполнения:</div>
                                <div class="services__item--text">от 14 до 30 дней</div>
                            </div>
                            <div class="services__item">
                                <div class="services__item--title">Цена:</div>
                                <div class="services__item--text">от 650$</div>
                            </div>
                            <div class="services__item">
                                <div class="services__item--title">Пример обращения клиента:</div>
                                <div class="services__item--text">необходим хорошо структурированный сайт з уникальным дизайном для производственной компании. Обязательно важно поддерживать связь с клиентами, проводить онлайн-консультации. Также, необходимо синхронизировать сайт с внутренней СРМ системой и учетной программой. Предоставить инструмент для быстрого и красивого размещения на сайте новой информации силами отдела маркетинга самого предприятия без сторонней помощи ИТ отдела.</div>
                            </div>
                            <div class="services__order">
                                <div class="border-btn-box pointer-large">
                                    <div class="border-btn-inner">
                                        <button @click="showModal" data-text="Заказать" class="border-btn modal-show">Заказать</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="services__block">
                    <div class="services__left green-color">
                        <div class="services__img">
                            <img src="dist/img/dev/catalogue.png" alt="">
                        </div>
                    </div>
                    <div class="services__right">
                        <div class="services__text">
                            <div class="services__title">Интернет - каталог</div>
                            <div class="services__item">
                                <div class="services__item--title">Главное</div>
                                <div class="services__item--text">создать оригинальный и продающий каталог</div>
                            </div>
                            <div class="services__item">
                                <div class="services__item--title">Действия</div>
                                <div class="services__item--text">заявка → обсуждение идеи → заключение договора → разработка дизайна → верстка → программирование → тестирование → запуск → рекомендации по дальнейшему продвижению</div>
                            </div>
                            <div class="services__item">
                                <div class="services__item--title">Сроки выполнения:</div>
                                <div class="services__item--text">от 14 до 30 дней</div>
                            </div>
                            <div class="services__item">
                                <div class="services__item--title">Цена:</div>
                                <div class="services__item--text">от 850$</div>
                            </div>
                            <div class="services__item">
                                <div class="services__item--title">Пример обращения клиента:</div>
                                <div class="services__item--text">нужно создать уникальный продающий интернет-магазин для мебельной компании с удобным разветвленным каталогом, поиском, возможностью фильтрации и сортировки товаров. Обеспечить синхронизацию цен и остатков с учетной ситемой. </div>
                            </div>
                            <div class="services__order">
                                <div class="border-btn-box pointer-large">
                                    <div class="border-btn-inner">
                                        <button @click="showModal" data-text="Заказать" class="border-btn modal-show">Заказать</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="order-block">
            <div class="container-min">
                <order></order>
            </div>
        </section>
        <section class="googleadword">
            <div class="container">
                <img src="dist/img/googleadwordss.jpg" alt=""  title="Реклама в Google Ads">
                <h3>Реклама в Google&nbsp;Ads&nbsp;</h3>
                <p>После создания сайта рекомендуем
                    <router-link to="/ppc">
                        заказать рекламную кампанию
                    </router-link>
                    в <strong>Goolge Ads</strong>, для привлечения новых, потенциальных клиентов. Это позволит получить целевых клиентов уже сегодня.&nbsp;</p>
                <p class="hidden">Запуск рекламной компании для бизнеса идеально подходит <strong>для контекстной рекламы</strong>, собственно для этого он и создается, исключительно под целевую аудиторию. Потребитель зашедший на сайт будет полностью поглощен и заинтересован Вашим предложением, вероятность того что он станет Вашим клиентом в разы выше <strong>чем на других сайтах</strong>. Поскольку мы создали более сотни рекламных кампаний, и знаем на что нужно делать упор, мы готовы настроить рекламную кампанию исходя из особенностей Вашего бизнеса.</p>
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
    import Order from '../components/Order'
    import Footer from '../components/Footer.vue'
    import Modal from '../components/Modal.vue'
    import BackToTop from 'vue-backtotop'
    export default {
        name: 'dev',
        components: {
            Order,
            Footer,
            Modal,
            BackToTop,
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
