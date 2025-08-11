<template>
  <section class="max-w-3xl mx-auto px-6 py-12">
    <div v-if="loading" class="text-center text-gray-500">Cargando publicación...</div>
    <div v-else-if="errorMessage" class="text-center text-red-500">{{ errorMessage }}</div>
    <div v-else>
      <h1 class="text-3xl font-bold text-blue-700 mb-4 text-center">{{ post.title }}</h1>
      <p class="text-gray-600 mb-6 text-center">{{ post.summary }}</p>
      <article
        class="prose prose-lg max-w-none text-gray-800 mb-8 post-content"
        v-html="post.content"
      ></article>
      <router-link to="/blog" class="text-blue-500 hover:underline">← Volver al blog</router-link>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const post = ref({})
const loading = ref(true)
const errorMessage = ref('')

onMounted(async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/blogs/${route.params.id}`)
    post.value = data.blog
    if (!post.value) {
      errorMessage.value = 'Publicación no encontrada.'
    }
  } catch (error) {
    errorMessage.value = 'Error al cargar la publicación.'
    console.error(error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.post-content {
  white-space: pre-line;
}
</style>
