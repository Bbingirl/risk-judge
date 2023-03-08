import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/HelloWorld.vue'
// 风险事件列表页
import riskListPage from '../views/riskListPage.vue'
// 风险详情页
import riskDetail from '../views/riskDetail.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/riskListPage',
    name: 'riskListPage',
    component: riskListPage
  },
  {
    path: '/riskDetail',
    name: 'riskDetail',
    component: riskDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
