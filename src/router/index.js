import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/HomeView.vue'),
    },
    {
      path: '/sobre-mi',
      name: 'About',
      component: () => import('../pages/AboutView.vue'),
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('../pages/BlogView.vue'),
    },
    { path: '/login', name: 'Login', component: () => import('../pages/LoginView.vue') },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../pages/DashboardView.vue'),
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach((to) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.token) {
    return '/login'
  }
})

export default router
