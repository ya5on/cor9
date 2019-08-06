import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Ppc from './views/Ppc'
import Create from './views/Create'
import Connect from './views/Connect'
import Audit from './views/Audit'
import Dev from './views/Dev'
import Contact from './views/Contact'
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
                title: 'Home'
            }
        },
        {
            path: '/ppc',
            name: 'ppc',
            component: Ppc,
            meta: {
                title: 'reklama',
            }
        },
        {
            path: '/ppc/create',
            name: 'create',
            component: Create,
            meta: {
                title: 'Create'
            }
        },
        {
            path: '/ppc/connect',
            name: 'connect',
            component: Connect,
            meta: {
                title: 'Connect'
            }
        },
        {
            path: '/ppc/audit',
            name: 'audit',
            component: Audit,
            meta: {
                title: 'Audit'
            }
        },
        {
            path: '/dev',
            name: 'dev',
            component: Dev,
            meta: {
                title: 'Dev'
            }
        },
        {
            path: '/dev/landing',
            name: 'landing',
            component: Landing,
            meta: {
                title: 'Landing'
            }
        },
        {
            path: '/dev/vizitka',
            name: 'vizitka',
            component: Vizitka,
            meta: {
                title: 'Vizitka'
            }
        },
        {
            path: '/dev/corporate',
            name: 'corporate',
            component: Corporate,
            meta: {
                title: 'Corporate'
            }
        },
        {
            path: '/dev/catalog',
            name: 'catalog',
            component: Catalog,
            meta: {
                title: 'Catalog'
            }
        },
        {
            path: '/dev/portfolio',
            name: 'portfolio',
            component: Portfolio,
            meta: {
                title: 'Portfolio'
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
            meta: {
                title: 'Contacts'
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