import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useBlogStore = defineStore('blog', () => {
  const loading = ref(false)
  const error = ref(null)

  const fetchBlogs = async (page = 1, limit = 10) => {
    loading.value = true
    error.value = null

    try {
      const skip = (page - 1) * limit
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/blogs?skip=${skip}&limit=${limit}`,
      )

      return data.blogs
    } catch (err) {
      error.value = 'No se pudieron cargar los blogs.'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    fetchBlogs,
  }
})
