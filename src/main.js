// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routers'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import './assets/scss/reset.css'
import './assets/scss/base.css'
import './assets/scss/colorBtn.css'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(router)
Vue.use(VueResource)

/* eslint-disable no-new */
const app = new Vue({
    router,
    ...App
}).$mount('#app')
