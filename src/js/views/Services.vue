<template>
    <section class="dev-services">
        <div class="container-min">
<!---------------------------------------block-------------------------------------->
            <div class="dev-services__block">
                <div class="dev-services__img yellow-color">
                    <img src="dist/img/dev/landing-page.png" alt="">
                    <div class="dev-services__title">Landing page</div>
                </div>
                <div class="dev-services__text">
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Главное:</div>
                        <div class="dev-services__item--text">оригинально презентовать товар, услугу, компанию&nbsp;или
                            акцию
                        </div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Действия:</div>
                        <div class="dev-services__item--text">заявка → обсуждение идеи → подбор дизайна → верстка →
                            программирование → тестирование → запуск → рекомендации по дальнейшему продвижению
                        </div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Сроки выполнения:</div>
                        <div class="dev-services__item--text">от 7 до 14 дней</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Цена:</div>
                        <div class="dev-services__item--text">от 350$</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Пример обращения клиента:</div>
                        <div class="dev-services__item--text">необходимо создать яркий и содержательный лендинг для Школы
                            иностранных языков, презентовать варианты обучения и дать возможность онлайн записи на курс
                            и&nbsp;получение консультации&nbsp;в чате
                        </div>
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

<!---------------------------------------block-------------------------------------->
            <div class="dev-services__block">
                <div class="dev-services__img violet-color">
                    <img src="dist/img/dev/vizitka.png" alt="">
                    <div class="dev-services__title">Сайт визитка</div>
                </div>
                <div class="dev-services__text">
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Главное:</div>
                        <div class="dev-services__item--text">выгодно и лаконично представить компанию в сети Интернет</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Действия:</div>
                        <div class="dev-services__item--text">заявка → обсуждение идеи → подбор дизайна → верстка →
                            программирование → наполнение → тестирование → обучение работы с сайтом → запуск →
                            рекомендации по дальнейшему продвижению
                        </div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Сроки выполнения:</div>
                        <div class="dev-services__item--text">от 7 до 14 дней</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Цена:</div>
                        <div class="dev-services__item--text">от 450$</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Пример обращения клиента:</div>
                        <div class="dev-services__item--text">нужно создать солидный сайт для адвоката. Важно максимально
                            заинтересовать и обеспечить запоминаемость у клиентов. Вызвать доверие.
                        </div>
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

<!---------------------------------------block-------------------------------------->
            <div class="dev-services__block">
                <div class="dev-services__img blue-color">
                    <img src="dist/img/dev/envelope.png" alt="">
                    <div class="dev-services__title">Корпоративный</div>
                </div>
                <div class="dev-services__text">
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Главное:</div>
                        <div class="dev-services__item--text">предоставить всю информацию о деятельности компании, ее
                            структуре, товарах, услугах с целью расширения рынка сбыта, привлечения партнёров,
                            инвесторов, формирования позитивного имиджа компании в сети Интернет
                        </div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Действия:</div>
                        <div class="dev-services__item--text">заявка → обсуждение идеи → подбор дизайна → верстка →
                            программирование → наполнение → тестирование → обучение работы с сайтом → запуск →
                            рекомендации по дальнейшему продвижению
                        </div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Сроки выполнения:</div>
                        <div class="dev-services__item--text">от 14 до 30 дней</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Цена:</div>
                        <div class="dev-services__item--text">от 650$</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Пример обращения клиента:</div>
                        <div class="dev-services__item--text">необходим хорошо структурированный сайт з уникальным дизайном
                            для производственной компании. Обязательно важно поддерживать связь с клиентами, проводить
                            онлайн-консультации. Также, необходимо синхронизировать сайт с внутренней СРМ системой и
                            учетной программой. Предоставить инструмент для быстрого и красивого размещения на сайте
                            новой информации силами отдела маркетинга самого предприятия без сторонней помощи ИТ отдела.
                        </div>
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

<!---------------------------------------block-------------------------------------->
            <div class="dev-services__block">
                <div class="dev-services__img green-color">
                    <img src="dist/img/dev/catalogue.png" alt="">
                    <div class="dev-services__title">Интернет - каталог</div>
                </div>
                <div class="dev-services__text">
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Главное:</div>
                        <div class="dev-services__item--text">создать оригинальный и продающий каталог</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Действия:</div>
                        <div class="dev-services__item--text">заявка → обсуждение идеи → заключение договора → разработка
                            дизайна → верстка → программирование → тестирование → обучение работы с сайтом → запуск →
                            рекомендации по дальнейшему продвижению
                        </div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Сроки выполнения:</div>
                        <div class="dev-services__item--text">от 14 до 30 дней</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Цена:</div>
                        <div class="dev-services__item--text">от 850$</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Пример обращения клиента:</div>
                        <div class="dev-services__item--text">нужно создать уникальный продающий интернет-магазин для
                            мебельной компании с удобным разветвленным каталогом, поиском, возможностью фильтрации и
                            сортировки товаров. Обеспечить синхронизацию цен и остатков с учетной ситемой.
                        </div>
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
            <div class="dev-services__block">
                <div class="dev-services__img red-col">
                    <img src="dist/img/dev/catalogue.png" alt="">
                    <div class="dev-services__title">Блог/Портфолио</div>
                </div>
                <div class="dev-services__text">
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Главное:</div>
                        <div class="dev-services__item--text">создать оригинальный и продающий каталог</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Действия:</div>
                        <div class="dev-services__item--text">заявка → обсуждение идеи → заключение договора → разработка
                            дизайна → верстка → программирование → тестирование → обучение работы с сайтом → запуск →
                            рекомендации по дальнейшему продвижению
                        </div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Сроки выполнения:</div>
                        <div class="dev-services__item--text">от 7 до 14 дней</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Цена:</div>
                        <div class="dev-services__item--text">от 350$</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Пример обращения клиента:</div>
                        <div class="dev-services__item--text">нужно создать уникальный продающий интернет-магазин для
                            мебельной компании с удобным разветвленным каталогом, поиском, возможностью фильтрации и
                            сортировки товаров. Обеспечить синхронизацию цен и остатков с учетной ситемой.
                        </div>
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
        <back-to-top bottom="50px" right="50px" visibleoffset="700">
            <img class="btn-to-top" src="dist/img/topBtn.png" alt="">
        </back-to-top>
        <Modal></Modal>
        <Footer></Footer>
    </section>
</template>

<script>
    import Order from '../components/Order'
    import Footer from '../components/Footer.vue'
    import Modal from '../components/Modal.vue'
    import BackToTop from 'vue-backtotop'

    export default {
        name: 'services',
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