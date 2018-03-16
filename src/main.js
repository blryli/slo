// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routers'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import ElementUI from 'element-ui'
import infiniteScroll from 'vue-infinite-scroll'
import store from './vuex/store'
// import vueLookImages from 'vue-look-images'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/reset.scss'
import './assets/scss/base.scss'
import './assets/scss/colorBtn.scss'
import '../static/js/global'

Vue.config.productionTip = false

import fn from './fn'
Vue.prototype.$fns = fn
Vue.directive('scroll', {
  bind: function (el, binding) {
    window.addEventListener('scroll', function () {
      var scrollTop = document.body.scrollTop + document.documentElement.scrollTop
      if (scrollTop > 0 && el.clientHeight > 0 && scrollTop + window.innerHeight >= el.clientHeight) {
        let loadMore = binding.value
        loadMore()
      }
    })
  }
})
Vue.component('show-editor', {
  props: ['id', 'text'],
  template: '<p :id="id">{{text}}</p>'
})

Vue.use(infiniteScroll)
Vue.use(Vuelidate)
Vue.use(router)
Vue.use(VueResource)
Vue.use(ElementUI)
// Vue.use(vueLookImages)

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  ...App
}).$mount('#app')
