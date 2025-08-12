<template>
  <section class="max-w-4xl mx-auto px-6 py-12 bg-[var(--color-cream)] rounded-2xl shadow">
    <h1 class="text-3xl font-bold mb-8 text-center text-[var(--color-green-olive)]">
      Panel de administración
    </h1>
    <!-- Botón para salir y nueva publicación -->
    <div class="flex justify-end gap-4 mb-8">
      <RouterLink
        to="/dashboard/blog/new"
        class="inline-flex items-center gap-2 bg-[var(--color-green-soft)] text-[var(--color-green-olive)] font-semibold px-4 py-2 rounded-lg shadow hover:bg-[var(--color-green-olive)] hover:text-[var(--color-cream)] transition"
      >
        + Nueva publicación
      </RouterLink>
      <button
        @click="logout"
        class="inline-flex items-center gap-2 bg-[var(--color-pink-coral)] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[var(--color-pink-light)] hover:text-[var(--color-green-olive)] transition"
      >
        Cerrar sesión
      </button>
    </div>

    <div v-if="loading" class="text-center text-[var(--color-green-olive)] py-8">
      Cargando publicaciones...
    </div>

    <div v-else class="overflow-x-auto">
      <table class="min-w-full rounded-xl overflow-hidden shadow">
        <thead>
          <tr>
            <th
              class="px-6 py-4 text-left text-lg font-semibold bg-[var(--color-green-soft)] text-[var(--color-green-olive)]"
            >
              Título
            </th>
            <th
              class="px-6 py-4 text-center text-lg font-semibold bg-[var(--color-green-soft)] text-[var(--color-green-olive)]"
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="post in blogs"
            :key="post._id"
            class="border-b border-[var(--color-green-soft)] hover:bg-[var(--color-cream)] transition"
          >
            <td class="px-6 py-4 text-[var(--color-green-olive)]">{{ post.title }}</td>
            <td class="px-6 py-4 text-center">
              <RouterLink
                :to="`/dashboard/blog/edit/${post._id}`"
                class="inline-flex items-center bg-[var(--color-pink-light)] text-[var(--color-green-olive)] font-semibold px-3 py-1 rounded-lg shadow hover:bg-[var(--color-pink-coral)] hover:text-white transition mr-2"
              >
                Editar
              </RouterLink>
              <RouterLink
                :to="`#`"
                class="inline-flex items-center bg-[var(--color-pink-coral)] text-white font-semibold px-3 py-1 rounded-lg shadow hover:bg-[var(--color-pink-light)] hover:text-[var(--color-green-olive)] transition"
                @click.prevent="deletePost(post._id)"
              >
                Eliminar
              </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
