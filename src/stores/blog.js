import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useBlogStore = defineStore('blog', () => {
  const blogsCache = ref({}) // { pageNumber: [blogs] }
  const loading = ref(false)
  const error = ref(null)

  const fetchBlogs = async (page = 1, limit = 10) => {
    if (blogsCache.value[page]) {
      return blogsCache.value[page]
    }

    loading.value = true
    error.value = null

    try {
      const skip = (page - 1) * limit
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/blogs?skip=${skip}&limit=${limit}`,
      )

      blogsCache.value[page] = data.blogs
      return data.blogs
    } catch (err) {
      error.value = 'No se pudieron cargar los blogs.'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return {
    blogsCache,
    loading,
    error,
    fetchBlogs,
  }
})
