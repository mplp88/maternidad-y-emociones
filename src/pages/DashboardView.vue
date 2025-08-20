<template>
  <section class="bg-cream min-h-screen py-20">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h1 class="text-4xl font-bold text-green-olive mb-2">Panel de administración</h1>
            <p class="text-green-olive opacity-80">Gestiona tus publicaciones del blog</p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <RouterLink
              to="/dashboard/blog/new"
              class="inline-flex items-center justify-center gap-2 bg-pink-coral hover:bg-pink-light text-cream hover:text-green-olive font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <i class="fa-solid fa-plus"></i>
              Nueva publicación
            </RouterLink>
            <button
              @click="logout"
              class="inline-flex items-center justify-center gap-2 bg-green-olive hover:bg-green-soft text-cream hover:text-green-olive font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
            >
              <i class="fa-solid fa-right-from-bracket"></i>
              Cerrar sesión
            </button>
          </div>
          <div class="flex flex-col sm:flex-row gap-4">
            <button @click="successToast">Test Success</button>
            <button @click="errorToast">Test Error</button>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="bg-white rounded-2xl shadow-xl p-12 text-center">
        <div
          class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-pink-coral mb-4"
        ></div>
        <p class="text-green-olive text-lg">Cargando publicaciones...</p>
      </div>

      <!-- Posts Table -->
      <div v-else class="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div class="p-6 border-b border-green-soft">
          <h2 class="text-2xl font-bold text-green-olive">Mis publicaciones</h2>
          <p class="text-green-olive opacity-80 mt-1">
            {{ blogs.length }} publicación(es) total(es)
          </p>
        </div>

        <div v-if="blogs.length === 0" class="p-12 text-center">
          <div
            class="w-24 h-24 bg-pink-light rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <span class="text-4xl">📝</span>
          </div>
          <h3 class="text-2xl font-bold text-green-olive mb-2">No hay publicaciones</h3>
          <p class="text-green-olive opacity-80 mb-6">Crea tu primera publicación para comenzar</p>
          <RouterLink
            to="/dashboard/blog/new"
            class="inline-flex items-center gap-2 bg-pink-coral hover:bg-pink-light text-cream hover:text-green-olive font-semibold px-6 py-3 rounded-xl transition-all duration-300"
          >
            <i class="fa-solid fa-plus"></i>
            Crear publicación
          </RouterLink>
        </div>

        <div v-else class="overflow-x-auto">
          <table class="min-w-full">
            <thead>
              <tr class="bg-green-soft">
                <th class="px-6 py-4 text-left text-lg font-semibold text-green-olive">Título</th>
                <th class="px-6 py-4 text-left text-lg font-semibold text-green-olive">Fecha</th>
                <th class="px-6 py-4 text-center text-lg font-semibold text-green-olive">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-green-soft">
              <tr
                v-for="post in blogs"
                :key="post._id"
                class="hover:bg-pink-light transition-colors duration-200"
              >
                <td class="px-6 py-4">
                  <div>
                    <h4 class="font-semibold text-green-olive">{{ post.title }}</h4>
                    <p class="text-green-olive opacity-60 text-sm mt-1 line-clamp-2">
                      {{ post.summary }}
                    </p>
                  </div>
                </td>
                <td class="px-6 py-4 text-green-olive opacity-80">
                  {{ formatDate(post.createdAt) || 'Sin fecha' }}
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center justify-center space-x-3">
                    <RouterLink
                      :to="`/blog/${post.slug}`"
                      class="inline-flex items-center bg-green-soft hover:bg-green-olive text-green-olive hover:text-cream font-semibold px-4 py-2 rounded-lg transition-all duration-200"
                      title="Ver publicación"
                    >
                      <i class="fa-solid fa-eye"></i>
                    </RouterLink>
                    <RouterLink
                      :to="`/dashboard/blog/edit/${post.slug}`"
                      class="inline-flex items-center bg-green-soft hover:bg-green-olive text-green-olive hover:text-cream font-semibold px-4 py-2 rounded-lg transition-all duration-200"
                      title="Editar publicación"
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </RouterLink>
                    <button
                      @click="deletePost(post._id)"
                      class="inline-flex items-center bg-red-100 hover:bg-red-500 text-red-600 hover:text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200"
                      title="Eliminar publicación"
                    >
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import { useFormatDate } from '@/composables/useFormatDate'
import { useToast } from '@/composables/useToast'

const blogs = ref([])
const loading = ref(true)
const authStore = useAuthStore()
const router = useRouter()
const { formatDate } = useFormatDate()
const { showToast } = useToast()

const deletePost = async (postId) => {
  try {
    if (!confirm('¿Estás seguro de que deseas eliminar esta publicación?')) {
      return
    }
    await axios.delete(`${import.meta.env.VITE_API_URL}/blogs/${postId}`, {
      headers: {
        Authorization: `Bearer ${authStore.token}`,
      },
    })
    blogs.value = blogs.value.filter((post) => post._id !== postId)
  } catch (error) {
    console.error('Error al eliminar el post', error)
  }
}

const logout = () => {
  authStore.logout()
  router.push('/login')
}

const successToast = () => {
  showToast('Operación exitosa', 'success')
}

const errorToast = () => {
  showToast('Error en la operación', 'error')
}

onMounted(async () => {
  // Verifica autenticación
  if (!authStore.isLoggedIn || !authStore.token) {
    router.push('/')
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
