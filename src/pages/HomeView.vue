<template>
  <!-- Hero Section -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-8">
        <div class="space-y-4">
          <h2 class="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Hola, soy<br />
            <span class="text-gray-700">{{ name }}</span>
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed max-w-lg">
            {{ pageTitle }}
          </p>
        </div>
        <button
          class="bg-rose-300 hover:bg-rose-400 text-white px-8 py-4 rounded-lg font-medium transition-colors"
        >
          Lee mis publicaciones
        </button>
      </div>

      <div class="flex justify-center lg:justify-end">
        <div class="w-80 h-96 bg-stone-200 rounded-3xl overflow-hidden">
          <img
            src="/images/foto-perfil.jpg"
            alt="Profile photo"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h3 class="text-3xl font-bold text-gray-900 mb-12">Últimas publicaciones</h3>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article class="space-y-4" v-for="post in posts" :key="post._id">
        <h4 class="text-xl font-semibold text-gray-900 leading-tight">
          {{ post.title }}
        </h4>
        <p class="text-gray-600 italic">{{ post.summary }}</p>
        <time class="text-sm text-gray-500">{{ post.date }}</time>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { usePageDataStore } from '@/stores/pageData'
const { name, pageTitle } = usePageDataStore()

const posts = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/blogs?limit=3`)
    console.log('Blogs cargados:', data)
    posts.value = data.blogs
  } catch (error) {
    console.error('Error al cargar posts', error)
  }
})
</script>

<style>
@import 'tailwindcss';

body {
  margin: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-height: 100vh;
}

.router-link-active {
  color: #f87171;
}
</style>
