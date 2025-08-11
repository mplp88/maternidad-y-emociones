import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
          email,
          password,
        })
        this.user = data.user
        this.token = data.token

        // Guardar token en localStorage para persistencia
        localStorage.setItem('authToken', this.token)
        return true
      } catch (error) {
        console.error('Error al iniciar sesión', error)
        return false
      }
    },
    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('authToken')
    },
  },
})
