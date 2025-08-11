import { defineStore } from 'pinia'
import axios from 'axios'

export const useBlogStore = defineStore('blog', {
  state: () => ({
    blogsCache: {}, // { pageNumber: [blogs] }
    loading: false,
    error: null,
  }),

  actions: {
    async fetchBlogs(page = 1, limit = 10) {
      // Si ya tenemos los blogs en cache, devolverlos sin pedirlos de nuevo
      if (this.blogsCache[page]) {
        return this.blogsCache[page]
      }

      this.loading = true
      this.error = null

      try {
        const skip = (page - 1) * limit
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/blogs?skip=${skip}&limit=${limit}`,
        )

        // Guardar en caché
        this.blogsCache[page] = data.blogs
        return data.blogs
      } catch (err) {
        this.error = 'No se pudieron cargar los blogs.'
        console.error(err)
      } finally {
        this.loading = false
      }
    },
  },
})
