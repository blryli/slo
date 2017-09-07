import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/components/frame/MainPage'
import Home from '@/components/home/index'

Vue.use(Router)

export default Router({
  routes: [
    {
      path: '/',component: MainPage,
      children: [
        { path: '/', name: '首页', component: Home }
      ]
    }
  ]
})
