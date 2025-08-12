<template>
  <div class="p-4 max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Editar publicación</h1>
    <PostForm
      :post="blog"
      mode="edit"
      @submit="handleSubmit"
      @cancel="$router.push('/dashboard')"
    />
  </div>
</template>

<script setup>
import PostForm from '@/components/PostForm.vue'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import { useAuthStore } from '../stores/auth'

const route = useRoute()
const id = route.params.id
const blog = ref({})
const router = useRouter()
const authStore = useAuthStore()

onMounted(async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/blogs/${id}`)
  blog.value = data.blog
})

const handleSubmit = async (postData) => {
  try {
    await axios.put(`${import.meta.env.VITE_API_URL}/blogs/${id}`, postData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authStore.token}`,
      },
    })
    router.push('/dashboard')
  } catch (error) {
    console.error('Error al actualizar el post:', error)
  }
}
</script>
