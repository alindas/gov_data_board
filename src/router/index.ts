import { createRouter, createWebHistory } from 'vue-router'
import DataScreen from '../views/DataScreen/index.vue'

const routes = [
  {
    path: '/',
    name: 'DataScreen',
    component: DataScreen
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
