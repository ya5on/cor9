<template>
    <section class="dev-services">
        <div class="container-min">
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
        name: 'vizitka',
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