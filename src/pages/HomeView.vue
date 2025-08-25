<template>
  <!-- Hero Section -->
  <section class="bg-cream flex items-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-8">
          <div class="space-y-6">
            <h2 class="text-4xl lg:text-6xl font-bold text-green-olive leading-tight">
              Hola, soy<br />
              <span class="text-pink-coral">{{ name }}</span>
            </h2>
            <p class="text-xl lg:text-xl text-green-olive leading-relaxed max-w-2xl font-light">
              {{ pageDescription }}
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-4">
            <button
              class="bg-pink-coral hover:bg-pink-light text-cream hover:text-green-olive px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              @click="$router.push('/blog')"
            >
              Lee mis publicaciones
            </button>
            <button
              class="border-2 border-green-olive text-green-olive hover:bg-green-olive hover:text-cream px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              @click="$router.push('/sobre-mi')"
            >
              Conoce más sobre mí
            </button>
          </div>
        </div>

        <div class="flex justify-center lg:justify-end">
          <div class="relative">
            <div
              class="w-80 h-96 lg:w-80 lg:h-[27rem] bg-pink-light rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
            >
              <img
                src="https://res.cloudinary.com/djwpqblr0/image/upload/v1755056434/foto-perfil_c0vgrs.jpg"
                alt="Profile photo"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="absolute -bottom-4 -left-4 w-24 h-24 bg-green-soft rounded-full opacity-60"
            ></div>
            <div
              class="absolute -top-4 -right-4 w-16 h-16 bg-pink-coral rounded-full opacity-60"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Latest Posts Section -->
  <section class="bg-cream py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h3 class="text-3xl lg:text-4xl font-bold text-green-olive mb-4">Últimas publicaciones</h3>
        <!-- <p class="text-xl text-green-olive opacity-80 max-w-2xl mx-auto">
          Descubre consejos, reflexiones y herramientas para acompañarte en tu camino de maternidad
        </p> -->
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RouterLink
          v-for="post in posts"
          :key="post._id"
          :to="`/blog/${post.slug}`"
          class="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
        >
          <div class="aspect-video bg-gradient-to-br from-pink-light to-green-soft">
            <img :src="post.imageUrl" alt="Post image" class="w-full h-full object-cover" />
          </div>
          <div class="p-6">
            <h4 class="text-xl font-bold text-green-olive mb-3">
              {{ post.title }}
            </h4>
            <p class="text-green-olive opacity-80 mb-4 line-clamp-3">
              {{ post.summary }}
            </p>
            <div class="flex items-center justify-between">
              <time class="text-sm text-green-olive opacity-60">{{
                formatDate(post.createdAt)
              }}</time>
              <span
                class="text-pink-coral font-semibold group-hover:translate-x-1 transition-transform duration-200"
              >
                Leer más →
              </span>
            </div>
          </div>
        </RouterLink>
      </div>

      <div class="text-center mt-12">
        <RouterLink
          to="/blog"
          class="inline-block bg-green-olive hover:bg-green-soft text-cream hover:text-green-olive px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg"
        >
          Ver todas las publicaciones
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { usePageDataStore } from '@/stores/pageData'
import { useFormatDate } from '@/composables/useFormatDate'

const pageDataStore = usePageDataStore()
const { name, pageDescription } = pageDataStore

const { formatDate } = useFormatDate()

const posts = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/blogs?limit=3`)
    posts.value = data.blogs
  } catch (error) {
    console.error('Error al cargar posts', error)
  }
})
</script>

<style>
@import 'tailwindcss';
</style>
