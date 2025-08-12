<template>
  <form @submit.prevent="handleSubmit" class="post-form">
    <div class="form-group">
      <label for="title">Título:</label>
      <input
        id="title"
        v-model="formData.title"
        type="text"
        required
        placeholder="Ingrese el título"
      />
    </div>

    <div class="form-group">
      <label for="image">Imagen:</label>
      <input type="file" @change="onFileChange" />
      <div v-if="formData.imageUrl" class="image-preview">
        <img :src="formData.imageUrl" alt="Preview" />
      </div>
    </div>

    <div class="form-group">
      <label for="summary">Resumen:</label>
      <input
        id="summary"
        v-model="formData.summary"
        type="text"
        required
        placeholder="Ingrese el resumen"
      />
    </div>

    <div class="form-group">
      <label for="content">Contenido:</label>
      <textarea
        id="content"
        v-model="formData.content"
        required
        placeholder="Ingrese el contenido"
      ></textarea>
    </div>

    <div class="form-group">
      <label for="author">Autor:</label>
      <span class="author">{{ author }}</span>
    </div>

    <div class="form-actions">
      <button type="button" @click="$emit('cancel')">Cancelar</button>
      <button type="submit">
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

<style scoped>
@import '../assets/palette.css';

.post-form {
  background: var(--color-cream);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 2px 16px rgba(168, 195, 160, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: bold;
  color: var(--color-green-olive);
}

input,
textarea {
  padding: 0.7rem;
  font-size: 1rem;
  border: 1px solid var(--color-green-soft);
  border-radius: 6px;
  background: var(--color-cream);
  color: var(--color-green-olive);
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.image-preview {
  margin-top: 0.5rem;
}
.image-preview img {
  max-width: 180px;
  max-height: 180px;
  border-radius: 1rem;
  border: 2px solid var(--color-pink-coral);
  object-fit: cover;
  background: var(--color-pink-light);
}

.author {
  color: var(--color-green-olive);
  font-weight: 500;
  font-size: 1rem;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}

button {
  padding: 0.8rem 2rem;
  background: var(--color-pink-coral);
  border: none;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.2s;
}
button:hover {
  background: var(--color-pink-light);
  color: var(--color-green-olive);
}
</style>
