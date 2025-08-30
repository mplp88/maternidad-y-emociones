<template>
  <a href="#" class="mb-5" @click.prevent="toggleShare">
    <i class="fa-solid fa-share fa-xl mx-1 text-green-olive"></i>
    <span class="text-green-olive">Compartir</span></a
  >
  <!-- Popup de opciones de compartir -->
  <div
    v-if="showShare"
    class="absolute bottom-12 right-0 z-10 bg-white border border-green-soft rounded-xl shadow-lg p-4 flex flex-col min-w-[180px]"
  >
    <button
      class="mt-2 bg-pink-coral hover:bg-pink-light text-cream font-semibold p-2 rounded-lg transition-colors duration-200"
      @click="copyLink"
    >
      <i class="fa-solid fa-link"></i>
      Copiar vínculo
    </button>
    <button
      class="mt-2 bg-pink-coral hover:bg-pink-light text-cream font-semibold p-2 rounded-lg transition-colors duration-200"
      @click="shareFacebook"
    >
      <i class="fa-brands fa-facebook"></i>
      Facebook
    </button>
    <button
      class="mt-2 bg-pink-coral hover:bg-pink-light text-cream font-semibold p-2 rounded-lg transition-colors duration-200"
      @click="shareTwitter"
    >
      <i class="fa-brands fa-x-twitter"></i>
      Twitter / X
    </button>
    <button
      class="mt-2 bg-pink-coral hover:bg-pink-light text-cream font-semibold p-2 rounded-lg transition-colors duration-200"
      @click="shareEmail"
    >
      <i class="fa-solid fa-envelope"></i>
      Email
    </button>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { useToast } from '@/composables/useToast'

const { showToast } = useToast()

const props = defineProps({ post: { type: Object, required: true } })

const showShare = ref(false)

function toggleShare() {
  if (navigator.share) {
    navigator
      .share({
        title: props.post.title,
        text: props.post.excerpt,
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
    `mailto:?subject=${encodeURIComponent(props.post.title)}&body=${encodeURIComponent(window.location.href)}`,
  )
  showShare.value = false
}

const shareTwitter = () => {
  window.open(
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(props.post.title)}`,
    '_blank',
  )
  showShare.value = false
}
</script>
