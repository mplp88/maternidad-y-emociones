<template>
  <div class="bg-green-soft shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <h1 class="text-2xl font-bold text-green-olive">
          <RouterLink to="/" class="hover:text-cream transition-colors duration-200">
            {{ pageTitle }}
          </RouterLink>
        </h1>
        <nav class="flex space-x-8">
          <RouterLink
            to="/sobre-mi"
            class="text-green-olive hover:text-cream font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-olive"
          >
            Sobre mi
          </RouterLink>
          <RouterLink
            to="/blog"
            class="text-green-olive hover:text-cream font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-olive"
          >
            Blog
          </RouterLink>
          <RouterLink
            v-if="isLoggedIn"
            to="/dashboard"
            class="text-green-olive hover:text-cream font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-olive flex items-center"
          >
            Dashboard
          </RouterLink>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { usePageDataStore } from '@/stores/pageData'
const authStore = useAuthStore()
const pageDataStore = usePageDataStore()

const isLoggedIn = ref(authStore.isLoggedIn)

const { pageTitle } = pageDataStore
</script>
