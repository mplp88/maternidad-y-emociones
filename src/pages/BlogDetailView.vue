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
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
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

const route = useRoute()
const post = ref({})
const loading = ref(true)
const errorMessage = ref('')
const { formatDate } = useFormatDate()
const showToast = useToast()

const showShare = ref(false)

function toggleShare() {
  if (navigator.share) {
    navigator
      .share({
        title: post.value.title,
        text: post.value.excerpt,
        url: window.location.href,
      })
      .then(() => showToast('Compartido con éxito', 'success'))
      .catch((err) => {
        showToast('Ocurrió un error al compartir', 'error')
        console.error('Error al compartir:', err)
      })
  } else {
    showShare.value = !showShare.value
  }
}

// Acciones de compartir
function copyLink() {
  navigator.clipboard.writeText(window.location.href)
  showShare.value = false
  alert('¡Vínculo copiado!')
}

function shareFacebook() {
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    '_blank',
  )
  showShare.value = false
}

function shareEmail() {
  window.open(
    `mailto:?subject=${encodeURIComponent(post.value.title)}&body=${encodeURIComponent(window.location.href)}`,
  )
  showShare.value = false
}

function shareTwitter() {
  window.open(
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.value.title)}`,
    '_blank',
  )
  showShare.value = false
}

onMounted(async () => {
  try {
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
