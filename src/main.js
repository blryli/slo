// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routers'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import ElementUI from 'element-ui'
var infiniteScroll =  require('vue-infinite-scroll');
// import vueLookImages from 'vue-look-images'
import 'element-ui/lib/theme-default/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/reset.css'
import './assets/scss/base.css'
import './assets/scss/colorBtn.css'
import '../static/js/global'

Vue.config.productionTip = false

Vue.use(infiniteScroll)
Vue.use(Vuelidate)
Vue.use(router)
Vue.use(VueResource)
Vue.use(ElementUI)
// Vue.use(vueLookImages)

/* eslint-disable no-new */
const app = new Vue({
    router,
    ...App
}).$mount('#app')
