import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

const routes = [
  // Define your routes here if needed
];

const router = new VueRouter({
  routes,
  mode: 'history', // Use history mode to remove '#' from URLs
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
