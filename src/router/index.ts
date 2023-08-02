import { createRouter, createWebHistory } from 'vue-router'
import Paiement from '@/views/Paiement.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Paiement
    }
  ]
})

export default router
