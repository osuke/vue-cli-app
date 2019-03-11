import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import 'reset.css';
import App from './App.vue';
import router from './router';
import store from './store';

const { VUE_APP_GA_ID } = process.env;

if (VUE_APP_GA_ID) {
  Vue.use(VueAnalytics, {
    id: VUE_APP_GA_ID,
    router,
  });
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
