import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Show/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:id',
      name: 'single product',
      component: () => import('../Show/ProductPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../Show/AboutPage.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" }
  },
})

export default router
