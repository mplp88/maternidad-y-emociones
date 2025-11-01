<template>
  <div class="bg-green-soft shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo y título -->
        <h1 class="text-2xl font-bold text-green-olive flex items-center space-x-2">
          <RouterLink to="/" class="hover:text-cream transition-colors duration-200">
            {{ pageTitle }}
          </RouterLink>
        </h1>

        <!-- Botón hamburguesa en mobile -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden text-green-olive hover:text-cream focus:outline-none"
        >
          <div class="w-6 h-6">
            <i class="fas fa-bars"></i>
          </div>
        </button>

        <!-- Menú normal en pantallas grandes -->
        <nav class="hidden md:flex space-x-8">
          <RouterLink
            to="/ebook"
            class="border-2 border-green-olive text-cream font-medium transition-colors duration-200 px-3 py-2 rounded-md bg-green-olive hover:scale-110 transition-transform shadow"
          >
            Ebook
            <i class="fa-solid fa-circle-exclamation text-pink-coral bg-cream rounded-full"></i>
          </RouterLink>
          <RouterLink
            to="/blog"
            class="text-green-olive hover:text-cream font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-olive"
          >
            Blog
          </RouterLink>
          <RouterLink
            to="/sobre-mi"
            class="text-green-olive hover:text-cream font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-olive"
          >
            Sobre mi
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

      <!-- Menú desplegable en mobile -->
      <div v-if="isMenuOpen" class="md:hidden border-t border-green-olive pt-2 pb-4 space-y-2">
        <RouterLink
          to="/ebook"
          class="block text-green-olive hover:text-cream font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-olive"
          @click="isMenuOpen = false"
        >
          Ebook
          <span class="text-cream bg-pink-coral rounded-md p-1">¡Nuevo!</span>
        </RouterLink>
        <RouterLink
          to="/blog"
          class="block text-green-olive hover:text-cream font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-olive"
          @click="isMenuOpen = false"
        >
          Blog
        </RouterLink>
        <RouterLink
          to="/sobre-mi"
          class="block text-green-olive hover:text-cream font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-olive"
          @click="isMenuOpen = false"
        >
          Sobre mi
        </RouterLink>
        <RouterLink
          v-if="isLoggedIn"
          to="/dashboard"
          class="block text-green-olive hover:text-cream font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-olive"
          @click="isMenuOpen = false"
        >
          Dashboard
        </RouterLink>
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

// Estado para abrir/cerrar menú mobile
const isMenuOpen = ref(false)
</script>
