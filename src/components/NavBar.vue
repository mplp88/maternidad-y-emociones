<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-6">
      <h1 class="text-xl font-semibold text-gray-900">
        <RouterLink to="/">{{ pageTitle }}</RouterLink>
      </h1>
      <nav class="flex space-x-8">
        <RouterLink to="/sobre-mi" class="text-gray-700 hover:text-gray-900 transition-colors">
          Sobre mi
        </RouterLink>
        <RouterLink to="/blog" class="text-gray-700 hover:text-gray-900 transition-colors">
          Blog
        </RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { usePageDataStore } from '@/stores/pageData'

const { pageTitle } = usePageDataStore()
</script>
