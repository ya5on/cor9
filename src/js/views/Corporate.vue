<template>
    <section class="dev-services">
        <div class="container-min">
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
        </div>
        <Modal></Modal>
        <Footer></Footer>
    </section>
</template>

<script>
    import Order from '../components/Order'
    import Footer from '../components/Footer.vue'
    import Modal from '../components/Modal.vue'

    export default {
        name: 'corporate',
        components: {
            Order,
            Footer,
            Modal,
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