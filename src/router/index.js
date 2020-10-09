import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Home from '../views/Home.vue'
import Kunst from '../views/Kunst.vue'
import Literatur from '../views/Literatur.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Kunst',
    name: 'Kunst',
    component: Kunst
  },
  {
    path: '/Literatur',
    name: 'Literatur',
    component: Literatur
  }
]

const router = new VueRouter({
  routes
})

export default router
