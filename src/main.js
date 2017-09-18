// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routers'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import ElementUI from 'element-ui'
import './assets/scss/reset.css'
import './assets/scss/base.css'
import './assets/scss/colorBtn.css'
import 'element-ui/lib/theme-default/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(router)
Vue.use(VueResource)
Vue.use(ElementUI)

/* eslint-disable no-new */
const app = new Vue({
    router,
    ...App
}).$mount('#app')
