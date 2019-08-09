<template>
    <section class="dev-services">
        <div class="container-min">
            <!---------------------------------------block-------------------------------------->
            <div class="dev-services__block">
                <div class="dev-services__img green-color">
                    <img src="dist/img/dev/catalogue.png" alt="">
                    <div class="dev-services__title">Сайт - каталог</div>
                </div>
                <div class="dev-services__text">
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Главное:</div>
                        <div class="dev-services__item--text">создать оригинальный и продающий каталог</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Действия:</div>
                        <div class="dev-services__item--text">заявка → обсуждение идеи → подбор
                            дизайна → верстка → программирование → тестирование → обучение работы с сайтом → запуск →
                            рекомендации по дальнейшему продвижению
                        </div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Цена:</div>
                        <div class="dev-services__item--text">от 850$</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Сроки выполнения:</div>
                        <div class="dev-services__item--text">от 14 до 30 дней</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Страниц:</div>
                        <div class="dev-services__item--text">1 - 15</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Система управления сайтом:</div>
                        <div class="dev-services__item--text">CMS Wordpress</div>
                    </div>
                    <div class="dev-services__item">
                        <div class="dev-services__item--title">Пример обращения клиента:</div>
                        <div class="dev-services__item--text">сайт на котором можно размещать детальную информацию о товарах и услугах компании, со всеми характеристиками и фото
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
        name: 'catalog',
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