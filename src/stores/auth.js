import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('user')) || null)
  const token = ref(localStorage.getItem('authToken') || null)

  const isLoggedIn = computed(() => !!token.value)

  const login = async (username, password) => {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
        username,
        password,
      })
      user.value = data.user
      token.value = data.token

      localStorage.setItem('authToken', token.value)
      localStorage.setItem('user', JSON.stringify(user.value))
      return true
    } catch (error) {
      console.error('Error al iniciar sesión', error)
      return false
    }
  }

  const logout = () => {
    user.value = null
    token.value = null
    localStorage.removeItem('authToken')
  }

  return {
    user,
    token,
    isLoggedIn,
    login,
    logout,
  }
})
