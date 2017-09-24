import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/components/frame/MainPage'
import Home from '@/components/home/index'
import particulars from '@/components/particulars/particulars'
import salePage from '@/components/salePage/salePage'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: MainPage,
      children: [
        { path: '/',
          name: '首页',
          component: Home
        },
        { path: '/particulars', name: '案例详情', component: particulars },
        { path: '/sale', name: '特卖', component: salePage },
      ]
    }
  ]
})

export default router
