import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/components/frame/MainPage'
import Home from '@/components/home/index'
import Particulars from '@/components/particulars/particulars'
import Works from '@/components/works/works'
import WorksPage from '@/components/works/worksPage'
import CompanyProfile from '@/components/works/companyProfile'

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
        { path: '/particulars', name: '案例详情', component: Particulars },
        { path: '/works', name: '作品集', component: Works },
        { path: '/worksPage', name: '公司作品', component: WorksPage },
        { path: '/companyProfile', name: '公司详情', component: CompanyProfile },
      ]
    }
  ]
})

export default router
