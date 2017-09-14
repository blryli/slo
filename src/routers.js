import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/components/frame/MainPage'
import Home from '@/components/home/index'
import orderQuery from '@/components/home/orderQuery'
import Logistics from '@/components/logistics/logistics'
import salePage from '@/components/salePage/salePage'
import fbaPage from '@/components/fbaPage/fbaPage'
import warehousePage from '@/components/warehousePage/warehousePage'
import distribution from '@/components/distribution/distribution'
import transshipment from '@/components/transshipment/transshipment'
import finance from '@/components/finance/finance'
import offLine from '@/components/offLine/offLine'
import help from '@/components/help/help'
import cooperation from '@/components/cooperation/cooperation'

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
        { path: '/orderQuery', name: '订单查询', component: orderQuery },
        { path: '/logistics', name: '物流', component: Logistics },
        { path: '/sale', name: '特卖', component: salePage },
        { path: '/fba', name: 'FBA', component: fbaPage },
        { path: '/warehouse', name: '仓库', component: warehousePage },
        { path: '/distribution', name: '分销', component: distribution },
        { path: '/transshipment', name: '转运', component: transshipment },
        { path: '/finance', name: '金融', component: finance },
        { path: '/offLine', name: '线下门店', component: offLine },
        { path: '/help', name: '帮助中心', component: help },
        { path: '/cooperation', name: '渠道合作', component: cooperation }
      ]
    }
  ]
})

export default router
