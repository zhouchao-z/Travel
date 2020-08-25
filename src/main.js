import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import 'styles/border.css';
import 'styles/resets.css';
import 'scripts/common.js';
import 'styles/iconfont.css';
import 'swiper/dist/css/swiper.css';


Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
