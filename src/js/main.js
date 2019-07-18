// preloader
window.addEventListener('load', function () {
    let preloader = document.querySelector('.preloader');
    preloader.className += " hidden";
});


import Vue from 'vue'
import App from './App'
import router from './router'
import VueParticles from 'vue-particles'

Vue.use(VueParticles);

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

new Vue({
    router,
    components: {
        App,
    },
    template: '<App/>'
}).$mount('#app');

