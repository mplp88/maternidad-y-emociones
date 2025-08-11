<template>
  <section class="max-w-4xl mx-auto px-6 py-12">
    <h1 class="text-3xl font-bold mb-6">Panel de administración</h1>

    <div class="flex justify-end mb-4">
      <RouterLink
        to="/dashboard/blog/new"
        class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        + Nueva publicación
      </RouterLink>
    </div>

    <div v-if="loading" class="text-gray-500">Cargando publicaciones...</div>

    <table v-else class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-100">
          <th class="border p-2 text-left">Título</th>
          <th class="border p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in blogs" :key="post._id">
          <td class="border p-2">{{ post.title }}</td>
          <td class="border p-2 text-center space-x-2">
            <RouterLink
              :to="`/dashboard/blog/edit/${post._id}`"
              class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
            >
              Editar
            </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const blogs = ref([])
const loading = ref(true)
const authStore = useAuthStore()
const router = useRouter()

onMounted(async () => {
  // Verifica autenticación
  if (!authStore.isLoggedIn || !authStore.token) {
    router.push('/login')
    return
  }
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/blogs`)
    blogs.value = data.blogs
  } catch (error) {
    console.error('Error al cargar blogs', error)
  } finally {
    loading.value = false
  }
})
</script>
