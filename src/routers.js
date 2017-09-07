import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/components/frame/MainPage'
import Home from '@/components/home/index'
import Logistics from '@/components/logistics/logistics'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/', component: MainPage,
      children: [
        { path: '/', name: '首页', component: Home },
        { path: '/logistics', name: '物流', component: Logistics },
      ]
    }
  ]
})

export default router
