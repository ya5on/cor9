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
    // mode: 'history',
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
                title: 'Создание, разработка сайтов Киев, Украина. Заказать создание сайта. Контекстная реклама Google Ads, настройка, сопровождение, аудит. Диджитал агентство - Cor9',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Создание, разработка сайта. Заказать сайт в Киеве, Украина ☎ (099) 545-27-40. Контекстная реклама, настройка, сопровождение, оптимизация, аудит в Киеве, Украина ☎ (063) 383-71-33 Диджитал агентство - Cor9.☛'
                    },
                ]
            }
        },
        {
            path: '/dev',
            name: 'dev',
            component: Dev,
            meta: {
                title: 'Создание, разработка сайтов. Заказать разработку сайта Киев, Украина ☎ (099) 545-27-40 Диджитал агентство - Cor9',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Создание, разработка сайта любой сложности. Разработка сайта под ключ. Заказать создать сайт с нуля в Киеве, Украине. ☎ (099) 545-27-40'
                    },
                ]
            }
        },
        {
            path: '/dev/plan/:id',
            name: 'plan',
            component: Plan,
            meta: {
                title: 'Создание, разработка сайтов Киев. Заказать разработку сайта. Диджитал агентство - Cor9',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Создание, разработка сайта любой сложности. Разработка сайта под ключ. Заказать создать сайт с нуля в Киеве, Украине. ☎ (099) 545-27-40'
                    },
                ]
            }
        },
        {
            path: '/ppc',
            name: 'ppc',
            component: Ppc,
            meta: {
                title: 'Контекстная реклама Google Ads, настройка, сопровождение, аудит, оптимизация. Киев, Украина заказать, настроить в Диджитал агентстве - Cor9',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Контекстноя реклама в Google Ads. Заказать контекстную рекламу Google Ads по доступной цене. Работаем на результат. Еженедельные отчеты. Стоимость от Диджитал агентства Cor9 ☎ (063) 383-71-33'
                    },
                ]
            }
        },
        {
            path: '/ppc/create',
            name: 'create',
            component: Create,
            meta: {
                title: 'Настройка аккаунта Google Ads. Первичная настройка аккаунта. Google Ads, Контекстная реклама Google Ads. Киев, Украина заказать, настроить в Диджитал агентстве - Cor9',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Контекстноя реклама в Google Ads. Заказать контекстную рекламу Google Ads по доступной цене. Работаем на результат. Еженедельные отчеты. Стоимость от Диджитал агентства Cor9 ☎ (063) 383-71-33'
                    },
                ]
            }
        },
        {
            path: '/ppc/connect',
            name: 'connect',
            component: Connect,
            meta: {
                title: 'Сопровождение аккаунта Google Ads. Ведение, Поддержка аккаунта Google Ads, Контекстная реклама Google Ads. Киев, Украина заказать, сопровождение в Диджитал агентстве - Cor9',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Контекстноя реклама в Google Ads. Заказать контекстную рекламу Google Ads по доступной цене. Работаем на результат. Еженедельные отчеты. Стоимость от Диджитал агентства Cor9 ☎ (063) 383-71-33'
                    },
                ]
            }
        },
        {
            path: '/ppc/audit',
            name: 'audit',
            component: Audit,
            meta: {
                title: 'Аудит контекстной рекламы Google Ads, Анализ эффективности рекламных кампаний, Аудит + консультация, Контекстная реклама Google Ads. Киев, Украина заказать, аудит в Диджитал агентстве - Cor9',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Контекстноя реклама в Google Ads. Заказать контекстную рекламу Google Ads по доступной цене. Работаем на результат. Еженедельные отчеты. Стоимость от Диджитал агентства Cor9 ☎ (063) 383-71-33'
                    },
                ]
            }
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts,
            meta: {
                title: 'Контакты',
                metaTags: [
                    {
                        name: 'description',
                        content: '6'
                    },
                ]
            }
        },

    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }

})