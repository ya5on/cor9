<template>
  <div id="app">
      <navbar></navbar>
      <vue-page-transition name="fade-in-up">
          <router-view ></router-view>
      </vue-page-transition>
  </div>
</template>

<script>
import Vue from 'vue'
import VuePageTransition from 'vue-page-transition'

Vue.use(VuePageTransition);
import Navbar from './components/Navbar.vue'
export default {
  name: 'app',
    components: {
        Navbar,
    },
};
</script>
