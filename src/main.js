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
Vue.use(VeeValidate)

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
