<template>
  <section class="max-w-sm mx-auto px-6 py-12">
    <h1 class="text-3xl font-bold text-center mb-8">Iniciar sesión</h1>

    <form @submit.prevent="handleLogin" class="space-y-4">
      <div>
        <label class="block mb-1 text-gray-700">Email</label>
        <input v-model="username" type="email" class="w-full border rounded px-3 py-2" required />
      </div>

      <div>
        <label class="block mb-1 text-gray-700">Contraseña</label>
        <input
          v-model="password"
          type="password"
          class="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Ingresar
      </button>

      <p v-if="errorMessage" class="text-red-500 text-center mt-4">
        {{ errorMessage }}
      </p>
    </form>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const username = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()
const authStore = useAuthStore()

onMounted(() => {
  console.log(authStore.isLoggedIn)
  if (authStore.isLoggedIn) {
    router.push('/dashboard')
  }
})

const handleLogin = async () => {
  const success = await authStore.login(username.value, password.value)
  if (success) {
    router.push('/dashboard')
  } else {
    errorMessage.value = 'Credenciales incorrectas'
  }
}
</script>
