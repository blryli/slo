import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/components/frame/MainPage'
import Home from '@/components/home/index'
import Particulars from '@/components/particulars/particulars'
import Works from '@/components/works/works'
import WorksPage from '@/components/works/worksPage'
import CompanyProfile from '@/components/works/companyProfile'
import Login from '@/components/login/login'
import myCenter from '@/components/myCenter/myCenter'


import MainPageEnd from '@/views/frame/MainPage'
import HomeEnd from '@/views/home/index'

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
        { path: '/myCenter', name: '个人中心', component: myCenter },
      ]
    },
    { path: '/login', name: '登录注册', component: Login },
    {
      path: '/admin',
      component: MainPageEnd,
      children: [
        { path: '/', name: '首页', component: HomeEnd },
      ]
    }
  ]
})

export default router
