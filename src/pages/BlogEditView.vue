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
import { useToast } from '@/composables/useToast'

const route = useRoute()
const slug = route.params.slug
const blog = ref({})
const router = useRouter()
const authStore = useAuthStore()
const { showToast } = useToast()

onMounted(async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/blogs/${slug}`)
  blog.value = data.blog
})

const handleSubmit = async (postData) => {
  try {
    console.log(postData)
    const response = await axios.put(`${import.meta.env.VITE_API_URL}/blogs/${slug}`, postData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authStore.token}`,
      },
    })

    console.log(response.status)
    showToast('Publicación actualizada', 'success')
    router.push('/dashboard')
  } catch (error) {
    if (error.response && error.response.status === 403) {
      authStore.logout()
      router.push('/login')
      return
    }

    console.error('Error al actualizar el post:', error)
  }
}
</script>
