import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gifts',
    name: 'gifts',
    component: () => import('../views/Gifts.vue')
  },
  {
    path: '/CreateProduct',
    name: 'CreateProduct',
    component: () => import('../views/CreateProduct.vue')
  },
  {
    path: '/Chat',
    name: 'Chat',
    component: () => import('../views/Chat.vue')
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
