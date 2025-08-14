<template>
  <form
    @submit.prevent="handleSubmit"
    class="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg space-y-6"
  >
    <!-- Título -->
    <div class="space-y-2">
      <label for="title" class="block text-lg font-semibold text-green-olive"> Título: </label>
      <input
        id="title"
        v-model="formData.title"
        type="text"
        required
        placeholder="Ingrese el título"
        class="w-full border border-green-soft rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-coral focus:outline-none"
      />
    </div>

    <!-- Imagen -->
    <div class="space-y-2">
      <label for="image" class="block text-lg font-semibold text-green-olive"> Imagen: </label>
      <input
        type="file"
        @change="onFileChange"
        class="w-full text-sm text-green-olive file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-coral file:text-white hover:file:bg-pink-light hover:file:text-green-olive"
      />
      <div v-if="formData.imageUrl" class="mt-3">
        <img
          :src="formData.imageUrl"
          alt="Preview"
          class="w-40 h-40 object-cover rounded-lg shadow"
        />
      </div>
    </div>

    <!-- Resumen -->
    <div class="space-y-2">
      <label for="summary" class="block text-lg font-semibold text-green-olive"> Resumen: </label>
      <input
        id="summary"
        v-model="formData.summary"
        type="text"
        required
        placeholder="Ingrese el resumen"
        class="w-full border border-green-soft rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-coral focus:outline-none"
      />
    </div>

    <!-- Contenido -->
    <div class="space-y-2">
      <label for="content" class="block text-lg font-semibold text-green-olive"> Contenido: </label>
      <textarea
        id="content"
        v-model="formData.content"
        required
        placeholder="Ingrese el contenido"
        class="w-full border border-green-soft rounded-lg px-4 py-2 h-40 resize-none focus:ring-2 focus:ring-pink-coral focus:outline-none"
      ></textarea>
    </div>

    <!-- Autor -->
    <div class="space-y-2">
      <label for="author" class="block text-lg font-semibold text-green-olive"> Autor: </label>
      <span class="block py-2 text-green-olive font-bold rounded-lg">
        {{ author }}
      </span>
    </div>

    <!-- Botones -->
    <div class="flex flex-wrap gap-4 justify-end">
      <button
        type="button"
        @click="$emit('cancel')"
        class="inline-flex items-center justify-center gap-2 bg-green-olive hover:bg-green-soft text-cream hover:text-green-olive font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
      >
        Cancelar
      </button>
      <button
        type="submit"
        class="inline-flex items-center justify-center gap-2 bg-pink-coral hover:bg-pink-light text-cream hover:text-green-olive font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
      >
        {{ mode === 'edit' ? 'Actualizar Post' : 'Crear Post' }}
      </button>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import { useAuthStore } from '../stores/auth'
import axios from 'axios'

const authStore = useAuthStore()
const author = ref(`${authStore.user.firstName} ${authStore.user.lastName}`)

const props = defineProps({
  post: {
    type: Object,
    default: () => ({}),
  },
  mode: {
    type: String,
    default: 'create', // "create" o "edit"
  },
})

const emit = defineEmits(['submit', 'cancel'])

const formData = reactive({
  title: '',
  content: '',
  summary: '',
  image: null,
  imageUrl: '',
  author: author.value,
})

// Si estamos en modo edición, cargamos los datos del post
watch(
  () => props.post,
  (newPost) => {
    if (props.mode === 'edit' && newPost) {
      formData.title = newPost.title || ''
      formData.summary = newPost.summary || ''
      formData.content = newPost.content || ''
      formData.image = newPost.image || ''
      formData.imageUrl = newPost.imageUrl || ''
      formData.author = newPost.author || author.value
    }
  },
  { immediate: true },
)

function onFileChange(e) {
  const file = e.target.files[0]
  formData.image = file
  if (file) {
    formData.imageUrl = URL.createObjectURL(file)
  } else {
    formData.imageUrl = ''
  }
}

async function uploadImage(image) {
  const formData = new FormData()
  formData.append('file', image)

  const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/image/upload`, formData, {
    headers: {
      Authorization: `Bearer ${authStore.token}`,
      'Content-Type': 'multipart/form-data',
    },
  })

  return data.secure_url
}

async function handleSubmit() {
  if (formData.image) {
    formData.imageUrl = await uploadImage(formData.image)
  }
  emit('submit', { ...formData })
}
</script>
