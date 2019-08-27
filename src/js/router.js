import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Ppc from './views/Ppc'
import Create from './views/Create'
import Connect from './views/Connect'
import Audit from './views/Audit'
import Dev from './views/Dev'
import Contacts from './views/Contacts'
import notFound from './views/404'
import Plan from './views/Plan'


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/404',
            component: notFound,
            meta: {
                title: 'Load 404 template, probably of a cute animal.'
            }
        },
        {
            path: '/404',
            name: 'notFound',
            component: notFound,
            meta: {
                title: 'Load 404 template, probably of a cute animal.'
            }
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'Разработка сайтов. Контекстная реклама. Cor9',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Создаем современные сайты ☎ +38(099) 545-27-40. Контекстная реклама, настройка, сопровождение, аудит в Киеве, Украина ☎ +38(063) 383-71-33. Cor9'
                    },
                ]
            }
        },
        {
            path: '/razrabotka_saytov',
            name: 'dev',
            component: Dev,
            meta: {
                title: 'Разработка, создание сайтов. Заказать разработку сайта Киев, Украина. Cor9',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Разработка сайтов Создаём современные и креативные веб-сайты. Вы можете заказать сайт: Киев, Украина. ☎ +38(099) 545-27-40'
                    },
                ]
            }
        },
        {
            path: '/razrabotka_saytov/:slug',
            name: 'plan',
            component: Plan,
            props: true,
            meta: {
                title: 'Разработка сайтов. Заказать landing page, сайт-визитка, корпоративный, интернет-каталог, блог, портфолио. Cor9',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Услуги по разработке и созданию сайтов Киев, Украина. Большой опыт создания на популярных CMS. Звоните: ☎ +38(099) 545-27-40'
                    },
                ]
            }
        },
        {
            path: '/kontekstnaya_reklama',
            name: 'ppc',
            component: Ppc,
            meta: {
                title: 'Контекстная реклама в Google Ads, настройка, сопровождение, аудит, оптимизация. Киев, Украина заказать, настроить в Cor9',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Заказать услугу настройки и сопровождения контекстной рекламы в Google Ads по лучшей цене в Украине. Работаем на результат. Еженедельные отчеты. ☎ +38(063) 383-71-33 ✅Доступная стоимость контекстной рекламы в интернете'
                    },
                ]
            }
        },
        {
            path: '/kontekstnaya_reklama/nastroyka',
            name: 'create',
            component: Create,
            meta: {
                title: 'Настройка аккаунта Google Ads. Заказать начальную настройку аккаунта. Киев, Украина, Digital agency - Cor9',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Первичная настройка аккаунта в Google Ads. Все основные пункты при создании аккаунта и запуск рекламы ☎ +38(063) 383-71-33'
                    },
                ]
            }
        },
        {
            path: '/kontekstnaya_reklama/soprovozhdeniye',
            name: 'connect',
            component: Connect,
            meta: {
                title: 'Сопровождение аккаунта Google Ads. Ведение, поддержка аккаунта. Заказать сопровождение Киев, Украина в Cor9',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Профессиональное сопровождение контекстной рекламы, сертифицированные специалисты Google Ads ✓ Цена на рекламу в Украине и Киеве ☎ +38(063) 383-71-33'
                    },
                ]
            }
        },
        {
            path: '/kontekstnaya_reklama/audit',
            name: 'audit',
            component: Audit,
            meta: {
                title: 'Аудит контекстной рекламы Google Ads, Анализ эффективности рекламных кампаний, Аудит + консультация. Киев, Украина. Заказать аудит в Cor9',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Закажите аудит аккаунта Google Ads в агентстве контекстной рекламы Cor9. Звоните ☎ +38(063) 383-71-33'
                    },
                ]
            }
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts,
            meta: {
                title: 'Контактная информация Digital agency Cor9',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Контакты Digital agency Cor9: Telegram/Viber ☎ +38(099) 545-27-40, ☎ +38(063) 383-71-33'
                    },
                ]
            }
        },

    ],
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    }

})