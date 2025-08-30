<template>
  <section class="bg-cream min-h-screen py-20">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-20">
        <div
          class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-pink-coral"
        ></div>
        <p class="text-green-olive mt-4 text-lg">Cargando publicación...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="errorMessage" class="text-center py-20">
        <div
          class="w-24 h-24 bg-pink-light rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <span class="text-4xl">⚠️</span>
        </div>
        <h2 class="text-2xl font-bold text-green-olive mb-4">{{ errorMessage }}</h2>
        <RouterLink to="/blog" class="text-pink-coral hover:text-green-olive font-semibold">
          ← Volver al blog
        </RouterLink>
      </div>

      <!-- Article Content -->
      <article v-else class="bg-white rounded-2xl shadow-xl overflow-hidden">
        <!-- Header Image -->
        <PostImage :images="post.imageUrls" />

        <!-- Article Header -->
        <header class="p-8 lg:p-12 border-b border-green-soft">
          <div class="text-center">
            <h1 class="text-4xl lg:text-5xl font-bold text-green-olive mb-6 leading-tight">
              {{ post.title }}
            </h1>
            <p class="text-xl text-green-olive opacity-80 mb-6 leading-relaxed">
              {{ post.summary }}
            </p>
            <p
              v-if="post.links"
              class="text-lg text-semibold text-green-olive opacity-80 mb-6 leading-relaxed"
            >
              Ver en:
              <a
                v-if="post.links?.instagram"
                :href="post.links?.instagram"
                target="_blank"
                class="text-pink-coral hover:text-green-olive font-semibold"
              >
                <i class="fab fa-instagram fa-xl p-2"></i>
              </a>
              <a
                v-if="post.links?.facebook"
                :href="post.links?.facebook"
                target="_blank"
                class="text-pink-coral hover:text-green-olive font-semibold"
              >
                <i class="fab fa-facebook fa-xl p-2"></i>
              </a>
            </p>
            <div class="flex items-center justify-center space-x-4 text-green-olive opacity-60">
              <span class="font-medium">{{ post.author }}</span>
              <span>•</span>
              <time class="font-medium">{{ formatDate(post.createdAt) }}</time>
            </div>
          </div>
        </header>

        <!-- Article Body -->
        <div class="p-8 lg:p-12">
          <div
            class="prose prose-lg max-w-none text-green-olive leading-relaxed post-content"
            v-html="post.content"
          ></div>
        </div>

        <!-- Article Footer -->
        <footer class="p-8 lg:p-12 border-t border-green-soft">
          <div class="flex flex-col sm:flex-row items-center justify-between mb-3">
            <div class="flex flex-col items-center sm:items-start space-y-3">
              <!-- Like Button -->
              <LikeButton :slug="post.slug" :client-id="clientId" />
            </div>
          </div>
          <p class="text-green-olive font-semibold mb-3">Comentarios</p>
          <div
            v-if="!post.comments.length"
            class="flex flex-col sm:flex-row items-center justify-between mb-3 w-full"
          >
            <p class="text-green-olive">Todavía no hay comentarios.</p>
          </div>
          <div
            v-else
            v-for="(comment, idx) in post.comments"
            class="flex flex-col sm:flex-row items-center justify-between mb-3 w-full"
            :key="idx"
          >
            <div class="flex flex-col items-center sm:items-start space-y-3 w-full">
              <p class="text-green-olive font-semibold">{{ comment.author }}</p>
              <p class="text-green-olive">{{ comment.content }}</p>
              <p class="text-green-olive">{{ formatDate(comment.createdAt) }}</p>
              <p v-if="comment.clientId === clientId" class="text-pink-coral">
                <a href="#" @click.prevent="deleteComment(comment._id)">Eliminar</a>
              </p>
              <hr class="w-full border-green-soft" />
            </div>
          </div>
          <div class="flex flex-col sm:flex-row items-center justify-between mb-3">
            <div class="flex flex-col items-center sm:items-start space-y-3 w-full">
              <p class="text-green-olive font-semibold">Dejá tu comentario</p>
              <form @submit.prevent="handleSubmit" class="w-full">
                <input
                  v-model="comment.author"
                  placeholder="Tu nombre"
                  class="border border-green-soft rounded-lg p-2 w-full mb-2"
                />
                <textarea
                  v-model="comment.content"
                  placeholder="Escribe un comentario..."
                  class="border border-green-soft rounded-lg p-2 w-full"
                ></textarea>
                <button
                  type="submit"
                  class="mt-2 bg-pink-coral hover:bg-pink-light text-cream font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Comentar
                </button>
              </form>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
            <!-- Bloque de  volver al blog -->
            <div class="flex flex-col items-center sm:items-start space-y-3">
              <!-- Link volver al blog -->
              <RouterLink
                to="/blog"
                class="flex items-center text-green-olive hover:text-pink-coral font-semibold transition-colors duration-200"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                Volver al blog
              </RouterLink>
            </div>

            <!-- Bloque compartir -->
            <div class="relative flex items-center space-x-4">
              <button
                class="px-4 h-10 bg-green-olive hover:bg-green-soft text-cream rounded-full flex items-center justify-center font-semibold transition-colors duration-200"
                @click="toggleShare"
              >
                Compartir
              </button>
              <!-- Popup de opciones de compartir -->
              <div
                v-if="showShare"
                class="absolute bottom-12 right-0 z-10 bg-white border border-green-soft rounded-xl shadow-lg p-4 flex flex-col min-w-[180px]"
              >
                <button class="share-option" @click="copyLink">Copiar vínculo</button>
                <button class="share-option" @click="shareFacebook">Facebook</button>
                <button class="share-option" @click="shareTwitter">Twitter / X</button>
                <button class="share-option" @click="shareEmail">Email</button>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { useFormatDate } from '../composables/useFormatDate'
import { useHead } from '@vueuse/head'
import { useToast } from '@/composables/useToast'
import PostImage from '@/components/PostImage.vue'
import LikeButton from '@/components/LikeButton.vue'
import Cookies from 'js-cookie'

const route = useRoute()
const post = ref({})
const loading = ref(true)
const errorMessage = ref('')
const { formatDate } = useFormatDate()
const { showToast } = useToast()

const showShare = ref(false)
const clientId = ref('')
const userName = ref('')
const comment = ref({
  author: '',
  content: '',
})

function toggleShare() {
  if (navigator.share) {
    navigator
      .share({
        title: post.value.title,
        text: post.value.excerpt,
        url: window.location.href,
      })
      .then(() => showToast('Compartido con éxito'))
      .catch((err) => {
        showToast('Ocurrió un error al compartir', 'error')
        console.error('Error al compartir:', err)
      })
  } else {
    showShare.value = !showShare.value
  }
}

// Acciones de compartir
const copyLink = () => {
  navigator.clipboard.writeText(window.location.href)
  showShare.value = false
  alert('¡Vínculo copiado!')
}

const shareFacebook = () => {
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    '_blank',
  )
  showShare.value = false
}

const shareEmail = () => {
  window.open(
    `mailto:?subject=${encodeURIComponent(post.value.title)}&body=${encodeURIComponent(window.location.href)}`,
  )
  showShare.value = false
}

const shareTwitter = () => {
  window.open(
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.value.title)}`,
    '_blank',
  )
  showShare.value = false
}

const handleSubmit = async () => {
  try {
    if (comment.value.author && comment.value.content) {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/blogs/${post.value.slug}/comments`,
        {
          comment: {
            clientId: clientId.value,
            author: comment.value.author,
            content: comment.value.content,
          },
        },
      )

      userName.value = data.comment.author
      saveUserName()

      if (data.ok) {
        showToast('Comentario enviado con éxito')
        comment.value.content = ''
        post.value.comments.push(data.comment)
      } else {
        showToast('Ocurrió un error al enviar el comentario.', 'error')
        console.error(data.error)
      }
    } else {
      showToast('Por favor, completa todos los campos.', 'error')
    }
  } catch (error) {
    showToast('Ocurrió un error al enviar el comentario.', 'error')
    console.error('Error al enviar el comentario:', error)
  }
}

const deleteComment = async (commentId) => {
  try {
    const { data } = await axios.delete(
      `${import.meta.env.VITE_API_URL}/blogs/${post.value.slug}/comments/${commentId}`,
      {
        data: {
          clientId: clientId.value,
        },
      },
    )

    if (data.ok) {
      showToast('Comentario eliminado con éxito')
      // Eliminar el comentario de la lista
      post.value.comments = post.value.comments.filter((c) => c._id !== commentId)
    } else {
      showToast('Ocurrió un error al eliminar el comentario.', 'error')
      console.error(data.error)
    }
  } catch (error) {
    showToast('Ocurrió un error al eliminar el comentario.', 'error')
    console.error('Error al eliminar el comentario:', error)
  }
}

const getOrCreateClientId = () => {
  let id = localStorage.getItem('clientId') || Cookies.get('clientId')
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem('clientId', id)
    Cookies.set('clientId', id, { expires: 365 })
  } else {
    localStorage.setItem('clientId', id)
    Cookies.set('clientId', id, { expires: 365 })
  }
  return id
}

const getUserName = () => {
  return localStorage.getItem('userName') || Cookies.get('userName') || ''
}

const saveUserName = () => {
  if (userName.value) {
    localStorage.setItem('userName', userName.value)
    Cookies.set('userName', userName.value, { expires: 365 })
  }
}

onMounted(async () => {
  try {
    clientId.value = getOrCreateClientId()
    userName.value = getUserName()
    if (userName.value) comment.value.author = userName.value
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/blogs/${route.params.slug}`)
    post.value = data.blog
    if (!post.value) {
      errorMessage.value = 'Publicación no encontrada.'
    }

    useHead({
      title: post.value.title,
      meta: [
        { name: 'description', content: post.value.excerpt },
        { property: 'og:title', content: post.value.title },
        { property: 'og:description', content: post.value.excerpt },
        { property: 'og:image', content: post.value.image },
      ],
    })
  } catch (error) {
    errorMessage.value = 'Error al cargar la publicación.'
    console.error(error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.post-content {
  white-space: pre-line;
}

.post-content h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-green-olive);
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.post-content h3 {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--color-green-olive);
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.post-content p {
  margin-bottom: 1rem;
  color: var(--color-green-olive);
  line-height: 1.7;
}

.post-content strong {
  font-weight: bold;
  color: var(--color-pink-coral);
}

.post-content em {
  font-style: italic;
  color: var(--color-green-olive);
}

.share-option {
  padding: 0.7rem 1rem;
  background: var(--color-pink-light);
  color: var(--color-green-olive);
  border: none;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
}
.share-option:last-child {
  margin-bottom: 0;
}
.share-option:hover {
  background: var(--color-green-soft);
  color: var(--color-cream);
}
</style>
