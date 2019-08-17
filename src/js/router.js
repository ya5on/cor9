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
import Landing from './views/Landing'
import Vizitka from './views/Vizitka'
import Corporate from './views/Corporate'
import Catalog from './views/Catalog'
import Portfolio from './views/Portfolio'
import Services from './views/Services'



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
                title: 'Создание, разработка сайтов Киев. Заказать создание сайта. Контекстная реклама Google Ads, настройка, сопровождение, аудит.'
            }
        },
        {
            path: '/ppc',
            name: 'ppc',
            component: Ppc,
            meta: {
                title: 'Контекстная реклама Google Ads, настройка, сопровождение, аудит, оптимизация Киев. Заказать Киев.',
            }
        },
        {
            path: '/ppc/create',
            name: 'create',
            component: Create,
            meta: {
                title: 'Настройка аккаунта Google Ads. Первичная настройка аккаунта. Google Ads, Контекстная реклама Google Ads.'
            }
        },
        {
            path: '/ppc/connect',
            name: 'connect',
            component: Connect,
            meta: {
                title: 'Сопровождение аккаунта Google Ads. Ведение, Поддержка аккаунта Google Ads, Контекстная реклама Google Ads.'
            }
        },
        {
            path: '/ppc/audit',
            name: 'audit',
            component: Audit,
            meta: {
                title: 'Аудит контекстной рекламы Google Ads, Анализ эффективности рекламных кампаний, Аудит + консультация, Контекстная реклама Google Ads.'
            }
        },
        {
            path: '/dev',
            name: 'dev',
            component: Dev,
            meta: {
                title: 'Создание, разработка сайтов Киев. Заказать разработку сайта'
            }
        },
        {
            path: '/dev/landing',
            name: 'landing',
            component: Landing,
            meta: {
                title: 'Казработка сайтов'
            }
        },
        {
            path: '/dev/vizitka',
            name: 'vizitka',
            component: Vizitka,
            meta: {
                title: 'Казработка сайтов'
            }
        },
        {
            path: '/dev/corporate',
            name: 'corporate',
            component: Corporate,
            meta: {
                title: 'Казработка сайтов'
            }
        },
        {
            path: '/dev/catalog',
            name: 'catalog',
            component: Catalog,
            meta: {
                title: 'Казработка сайтов'
            }
        },
        {
            path: '/dev/portfolio',
            name: 'portfolio',
            component: Portfolio,
            meta: {
                title: 'Разработка сайтов'
            }
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts,
            meta: {
                title: 'Контакты'
            }
        },

    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }

})