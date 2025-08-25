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

    <!-- Imágenes -->
    <div class="space-y-2">
      <label class="block text-lg font-semibold text-green-olive"> Imágenes: </label>
      <div v-for="(image, index) in formData.images" :key="index" class="mb-2">
        <input
          type="file"
          @change="handleChange($event, index)"
          class="w-full text-sm text-green-olive file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-coral file:text-white hover:file:bg-pink-light hover:file:text-green-olive mb-2"
        />
        <img
          v-if="formData.imageUrls[index]"
          :src="formData.imageUrls[index]"
          alt="Preview"
          class="w-40 h-40 object-cover rounded-lg shadow"
        />
        <button
          type="button"
          @click="removeImage(index)"
          class="inline-flex items-center justify-center gap-2 bg-green-olive hover:bg-green-soft text-cream hover:text-green-olive font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
        >
          Eliminar
        </button>
      </div>
      <button
        type="button"
        @click="addImage"
        class="inline-flex items-center justify-center gap-2 bg-pink-coral hover:bg-pink-light text-cream hover:text-green-olive font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
      >
        {{ formData.images.length > 1 ? 'Agregar otra imagen' : 'Agregar imagen' }}
      </button>
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

    <!-- Links -->
    <div class="space-y-2">
      <label for="instagram" class="block text-lg font-semibold text-green-olive">
        Link de Instagram:
      </label>
      <input
        id="instagram"
        v-model="formData.links.instagram"
        placeholder="Ingrese el enlace de Instagram"
        class="w-full border border-green-soft rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-coral focus:outline-none"
      />
    </div>

    <div class="space-y-2">
      <label for="facebook" class="block text-lg font-semibold text-green-olive">
        Link de Facebook:
      </label>
      <input
        id="facebook"
        v-model="formData.links.facebook"
        placeholder="Ingrese el enlace de Facebook"
        class="w-full border border-green-soft rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-coral focus:outline-none"
      />
    </div>

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
const imagesModified = ref(false)

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
  images: [null],
  imageUrls: [],
  author: author.value,
  links: {
    instagram: '',
    facebook: '',
  },
})

// Si estamos en modo edición, cargamos los datos del post
watch(
  () => props.post,
  (newPost) => {
    if (props.mode === 'edit' && newPost) {
      formData.title = newPost.title || ''
      formData.summary = newPost.summary || ''
      formData.content = newPost.content || ''
      formData.images = newPost.images || [null]
      formData.imageUrls = newPost.imageUrls || []
      formData.author = newPost.author || author.value
      formData.slug = newPost.slug || ''
      formData.links = {
        instagram: newPost.links?.instagram || '',
        facebook: newPost.links?.facebook || '',
      }
    }
  },
  { immediate: true },
)

const addImage = () => {
  formData.images.push(null)
}

const removeImage = (index) => {
  formData.images.splice(index, 1)
}

const handleChange = (event, index) => {
  imagesModified.value = true
  formData.images[index] = event.target.files[0]
  formData.imageUrls = formData.images.map((file) => URL.createObjectURL(file))
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
  if (imagesModified.value) {
    const uploadPromises = formData.images.map((image) => uploadImage(image))
    formData.imageUrls = await Promise.all(uploadPromises)
  }
  emit('submit', { ...formData })
}
</script>
