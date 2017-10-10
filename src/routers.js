import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/components/frame/MainPage'
import Home from '@/components/home/index'
import particulars from '@/components/particulars/particulars'
import works from '@/components/works/works'
import worksPage from '@/components/works/worksPage'

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
        { path: '/works', name: '作品集', component: works },
        { path: '/worksPage', name: '公司作品', component: worksPage },
      ]
    }
  ]
})

export default router
