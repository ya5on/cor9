<template>
    <div class="ppc">
        <section class="ppc__inner connect-bg">
            <div class="container-min">
                <div class="ppc__main">
                    <div class="ppc__main--item">
                        <div class="text-padding">
                            <h1>Connect ads to your online store</h1>
                            <!--<p>Fully automated advertising tool to help you create and optimize your Google Ads.</p>-->
                            <div class="btn-box">
                                <div class="border-btn-box pointer-large">
                                    <div class="border-btn-inner">
                                        <button @click="showModal" data-text="Заказать" class="border-btn modal-show">Заказать</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ppc__main--item hidden">
                        <img src="dist/img/ppc/header-connect.jpg" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section class="services">
            <div class="container-min">
                <div class="services__header">
                    <h2>What can you do with your ads?</h2>
                </div>
                <div class="services__block">
                    <div class="services__item">
                        <img src="dist/img/ppc/icon-connect.svg" alt="">
                        <div class="services__text">
                            <h4>Create Ads</h4>
                            <p>Получить профессиональную рекламу всего за несколько кликов</p>
                        </div>
                    </div>
                    <div class="services__item">
                        <img src="dist/img/ppc/icon-personlized.svg" alt="">
                        <div class="services__text">
                            <h4>Target People</h4>
                            <p>Connect your store and turn your products into high-quality ads.</p>
                        </div>
                    </div>
                    <div class="services__item">
                        <img src="dist/img/ppc/icon-sellmore.svg" alt="">
                        <div class="services__text">
                            <h4>Set Budget</h4>
                            <p>Automate your advertising to reach success with less effort.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="description">
            <div class="container-min">
                <h2>Сопровождение аккаунтов</h2>
                <div class="text">
                    <h3>Почему нужна поддержка аккаунта Google AdWords?</h3>
                    <p>Первичной настройки аккаунта AdWords недостаточно для того, чтобы успешно привлекать клиентов с AdWords и эффективно использовать бюджет на рекламу.</p>
                    <p>Это может быть связано со следующими причинами:</p>
                    <ol>
                        <li>
                            <p>Есть действия конкурентов. Из-за этого ваша реклама не будет стабильной. Например, вы выбираете стратегию при которой ваши объявления находятся в топ-3, есть конкуренты, которые тоже хотят находиться в топ-3. Они начинают повышать ставки из-за чего Ваши объявления могут сместиться вниз. В следствии чего может снизиться количество трафика на Ваш сайт.</p>
                        </li>
                        <li>
                            <p>При первичной настройке AdWords невозможно определить все минус-слова. Во время первичной настройки могут быть добавлены лишь самые общие слова, например “бесплатно”, “скачать”, “отзывы”, “реферат” и т.д. Но “тематические” слова станут известны лишь после того, как аккаунт поработает определенное время. Минус-слова необходимо добавлять по мере появления нецелевых поисковых запросов, по которым переходили пользователи, таким образом, делая аккаунт все лучше и лучше.</p>
                        </li>
                        <li>
                            <p>Поиск новых более эффективных элементов аккаунта (тех, у которых выше CTR, которые приносят больше конверсий за меньшие деньги и т.д.) — поиск лучших слов, поиск лучших текстов.</p>
                        </li>
                        <li>
                            <p>Сезонность.</p>
                        </li>
                        <li>
                            <p>Информация в уведомлениях AdWords (?)</p>
                        </li>
                        <li>
                            <p>Действия пользователей.</p>
                        </li>
                        <li>
                            <p>Изменения системы Google AdWords.</p>
                        </li>
                    </ol>
                    <p>Поэтому необходимо выполнять периодический <router-link to="/ppc/audit">
                        аудит
                    </router-link> вашей рекламы Google AdWords.</p>
                </div>
                <div class="text">
                    <h3>Что входит в работы по поддержке аккаунта AdWords?</h3>
                    <p>Работы, выполняемые в ходе поддержки, зависят от целей, которые стоят перед рекламной кампанией, ваших пожеланий, тематики и др. факторов. Вот общий список того, что мы делаем в рамках поддержки аккаунта AdWords:</p>
                    <ol>
                        <li>
                            <p>Следим за бюджетом. (Хватает ли бюджета на все рекламируемые слова? Если нет, что можно сделать?)</p>
                        </li>
                        <li>
                            <p>Следим за трафиком. Если возникают какие-либо скачки трафика, стараемся найти их причину. &nbsp;</p>
                        </li>
                        <li>
                            <p>Отслеживаем поведение посетителей с рекламы на сайте. Для этого AdWords предварительно должен быть связан с Google Analytics.</p>
                        </li>
                        <li>
                            <p>Тестируем тексты объявлений. 1) Сравниваем несколько текстов объявлений в рамках одной группы объявлений, и отключаем объявления с CTR ниже чем в у др. объявлений в этой же группе при условии, что они набрали нормальную статистику (условно 100 единиц показателя и более). Например, если в рамках одной группы объявлений есть объявления с CTR=3% и CTR=12% и они оба набрали 100 и более показов, мы приостанавливаем объявление с CTR=3%. 2) По аналогии с объявлением, у которого CTR=12% составляем тексты для групп, где CTR низкий. 3) Создаем и тестируем новые тексты объявлений.</p>
                        </li>
                        <li>
                            <p>Ищем новые ключевые слова.</p>
                        </li>
                        <li>
                            <p>Повышаем показатель качества ключевых слов. Выполняем действия по повышению показателя качества для ключевых слов с показ. кач-ва 6/10 и ниже.</p>
                        </li>
                        <li>
                            <p>При необходимости, тестируем новые посадочные страницы (с обязательным отслеживанием конверсий, или хотя бы поведенческих факторов). Новые посадочные страницы можно также ставить для слов с низким показателем качества из-за “Низкого качества целевой страницы”</p>
                        </li>
                        <li>
                            <p>Добавляем минус-слова. Анализируем отчеты поисковых запросов, находим минус-слова и добавляем их в аккаунт, чтобы реклама не показывалась по нерелевантным и нецелевым запросам.</p>
                        </li>
                        <li>
                            <p>Стараемся повышать эффективность использования бюджета. Перераспределять бюджет на более эффективные, с точки зрения целей (которые стоят перед рекламой), кампании, группы объявлений, ключевые слова и т.д.</p>
                        </li>
                        <li>
                            <p>Работаем над ставками ключевых слов. Зависит от целей, которые стоят перед рекламной кампанией. Например, если Вы хотите, чтобы Ваши объявления находились в топ-3 за минимальную стоимость клика, то мы снижаем ставки, но при этом следим, чтобы объявления оставались в топ-3.</p>
                        </li>
                        <li>
                            <p>Устраняем ошибки. При обнаружении ЛЮБЫХ ошибок в работе РК, принимаем все меры по их своевременному устранению.</p>
                        </li>
                        <li>
                            <p>Общаемся с поддержкой AdWords при необходимости по всем возникающим у нас вопросам по работе РК. &nbsp;</p>
                        </li>
                    </ol>
                </div>
                <div class="text">
                    <p><strong>Месячная стоимость работ по сопровождению аккаунта от 150$.</strong></p>
                </div>
                <div class="btn-box">
                    <div class="border-btn-box pointer-large">
                        <div class="border-btn-inner">
                            <button @click="showModal" data-text="Заказать" class="border-btn modal-show">Заказать</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <back-to-top bottom="50px" right="50px" visibleoffset="700">
            <img class="btn-to-top" src="dist/img/topBtn.png" alt="">
        </back-to-top>
        <modal></modal>
        <Footer></Footer>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue'
    import Footer from '../components/Footer'
    import Modal from '../components/Modal'
    import BackToTop from 'vue-backtotop'
    export default {
        name: 'connect',
        components: {
            Navbar,
            Footer,
            Modal,
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