<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-6">
      <h1 class="text-xl font-semibold">
        <RouterLink to="/">{{ pageTitle }}</RouterLink>
      </h1>
      <nav class="flex space-x-8">
        <RouterLink to="/sobre-mi"> Sobre mi </RouterLink>
        <RouterLink to="/blog"> Blog </RouterLink>
        <RouterLink v-if="authStore.isLoggedIn" to="/dashboard" class="flex items-center">
          Dashboard
        </RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { usePageDataStore } from '@/stores/pageData'
const authStore = useAuthStore()

const { pageTitle } = usePageDataStore()
</script>
