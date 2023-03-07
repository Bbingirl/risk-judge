import Vue from 'vue'
import VueRouter from 'vue-router'
import riskListPage from '../views/riskListPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'riskListPage',
    component: riskListPage
  },
  {
    path: '/riskListPage',
    name: 'riskListPage',
    component: () => import('../views/riskListPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
