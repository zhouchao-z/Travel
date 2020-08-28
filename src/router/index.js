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
  {
    path: '/city',
    name: 'City',
    component: () => import('../views/City.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
