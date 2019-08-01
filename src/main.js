import Vue from 'vue'
import './plugins/vuetify'
import './plugins/base'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import theme from './plugins/theme'
import './components'
import VeeValidate from 'vee-validate'
import services from '../microservices/services'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VeeValidate)

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme
})

Vue.use(VueAxios, axios)

Vue.use(services, {
  baseUrl: 'http://localhost:8000'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
