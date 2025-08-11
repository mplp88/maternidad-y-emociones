<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="title">Título:</label>
      <input
        id="title"
        v-model="formData.title"
        type="text"
        required
        placeholder="Ingrese el título"
      />
    </div>

    <div>
      <label for="summary">Resumen:</label>
      <input
        id="summary"
        v-model="formData.summary"
        type="text"
        required
        placeholder="Ingrese el resumen"
      />
    </div>

    <div>
      <label for="content">Contenido:</label>
      <textarea
        id="content"
        v-model="formData.content"
        required
        placeholder="Ingrese el contenido"
      ></textarea>
    </div>

    <div>
      <label for="author">Autor:</label>
      <span>{{ author }}</span>
    </div>

    <button type="submit">
      {{ mode === 'edit' ? 'Actualizar Post' : 'Crear Post' }}
    </button>
  </form>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import { useAuthStore } from '../stores/auth'

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

const emit = defineEmits(['submit'])

const formData = reactive({
  title: '',
  content: '',
  summary: '',
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
      formData.author = newPost.author || author.value
    }
  },
  { immediate: true },
)

function handleSubmit() {
  emit('submit', { ...formData })
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
label {
  font-weight: bold;
}
input,
textarea {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 0.7rem;
  background: #33c3f0;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
}
button:hover {
  background: #249ec7;
}
</style>
