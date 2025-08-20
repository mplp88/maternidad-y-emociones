<template>
  <div class="p-4 max-w-3xl mx-auto">
    <h1 class="text-2xl lg:text-3xl font-bold text-green-olive mb-3">Crear nueva publicación</h1>
    <PostForm
      :post="null"
      mode="create"
      @submit="handleSubmit"
      @cancel="$router.push('/dashboard')"
    />
  </div>
</template>

<script setup>
import PostForm from '../components/PostForm.vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useToast } from '@/composables/useToast'

const authStore = useAuthStore()
const router = useRouter()
const { showToast } = useToast()

const handleSubmit = async (postData) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/blogs`, postData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authStore.token}`,
      },
    })

    if (response.status == 403) {
      showToast('Tenés que volver a ingresar', 'error')
      router.push('/login')
    }

    // Redirigir a dashboard
    showToast('Publicación creada', 'success')
    router.push('/dashboard')
  } catch (error) {
    showToast('Ocurrió un error', 'error')
    console.error('Error al crear el post:', error)
  }
}
</script>
