import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
Vue.use(VueRouter)

/* webpackChunkName: "about" */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',

  //   component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
