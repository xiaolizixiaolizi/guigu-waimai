import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import api from './network'
Vue.prototype.$api = api
import Icon from 'vue2-svg-icon/Icon.vue'
Vue.component('icon', Icon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
