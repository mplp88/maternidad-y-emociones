<template>
  <section class="bg-cream min-h-screen py-10">
    <div class="max-w-6xl mx-auto px-6" v-if="loading">
      <div class="text-center py-20">
        <div
          class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-pink-coral"
        ></div>
        <p class="text-green-olive mt-4 text-lg">Cargando...</p>
      </div>
    </div>
    <div class="max-w-6xl mx-auto px-6" v-else>
      <div class="grid lg:grid-cols-2 gap-4 items-center">
        <div class="mb-2 lg:mb-0">
          <h1 class="text-4xl font-bold text-green-olive mb-6 text-center">"{{ ebook.title }}"</h1>
          <h2 class="text-2xl font-bold text-green-olive mb-6 text-center">
            {{ ebook.isFree ? '📘 Ebook Gratuito' : '📕 Ebook de Pago' }}
          </h2>
        </div>
        <div class="text-center">
          <p class="text-lg text-green-olive/90 max-w-2xl mb-10 text-center mx-auto">
            {{ ebook.description }}
          </p>
          <a
            :href="ebook?.downloadUrl"
            download="E-Book_Maternar_con_Emocion.pdf"
            class="bg-pink-coral hover:bg-pink-light text-cream hover:text-green-olive px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
            @click="registerDownload"
          >
            Descargar ahora
          </a>
        </div>
      </div>
      <div class="mt-10 max-w-2xl mx-auto px-6 text-center">
        <img
          class="w-full h-auto rounded-lg shadow-lg"
          :src="ebook.coverImage"
          alt="Portada Ebook Maternar con Emoción"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const loading = ref(true)
const ebook = ref(null)

const registerDownload = () => {
  //endpoint ebooks/register-download/:slug
  fetch(`${import.meta.env.VITE_API_URL}/ebooks/register-download/${ebook.value.slug}`, {
    method: 'POST',
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.message)
    })
    .catch((error) => {
      console.error('Error registering download:', error)
    })
}

onMounted(() => {
  console.log('fetching ebooks')
  fetch(`${import.meta.env.VITE_API_URL}/ebooks`)
    .then((res) => res.json())
    .then((data) => {
      ebook.value = data.ebooks[0]
      loading.value = false
    })
})
</script>
