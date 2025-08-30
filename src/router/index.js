import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import HomeView from '../pages/HomeView.vue'
import BlogView from '../pages/BlogView.vue'
import BlogDetailView from '../pages/BlogDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // opcional: animación suave
      }
    }

    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/sobre-mi',
      name: 'About',
      component: () => import('../pages/AboutView.vue'),
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogView,
    },
    {
      path: '/blog/:slug',
      name: 'BlogDetail',
      component: BlogDetailView,
    },
    {
      path: '/dashboard/blog/new',
      name: 'BlogNew',
      component: () => import('../pages/BlogNewView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard/blog/edit/:slug',
      name: 'BlogEdit',
      component: () => import('../pages/BlogEditView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../pages/LoginView.vue'),
    },
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
