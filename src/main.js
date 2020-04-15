import Vue from 'vue'
// import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import '@/assets/css/global.css'

Vue.config.productionTip = false
// 挂载到vue原型上
Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')