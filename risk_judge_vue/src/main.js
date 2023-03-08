import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import * as echarts from 'echarts'


import axios from 'axios'
// API集中管理
import apis from './api/api.js'


import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false

Vue.prototype.$http = apis
Vue.prototype.$echarts = echarts


Vue.use(ElementUI);
// Vue.use(api);
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
