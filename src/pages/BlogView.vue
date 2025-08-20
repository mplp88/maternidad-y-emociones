<template>
  <section class="bg-cream min-h-screen py-10">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-6">
        <h1 class="text-5xl lg:text-6xl font-bold text-green-olive mb-6">Blog</h1>
        <p class="text-xl text-green-olive opacity-80 max-w-2xl mx-auto">
          Reflexiones, consejos y herramientas para acompañarte en tu camino de maternidad
        </p>
        <div class="w-24 h-1 bg-pink-coral mx-auto rounded-full mt-6"></div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-20">
        <div
          class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-pink-coral"
        ></div>
        <p class="text-green-olive mt-4 text-lg">Cargando publicaciones...</p>
      </div>

      <!-- Blog Posts Grid -->
      <div v-else class="space-y-8">
        <div v-if="blogs.length === 0" class="text-center py-20">
          <div
            class="w-24 h-24 bg-pink-light rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <span class="text-4xl">📝</span>
          </div>
          <h3 class="text-2xl font-bold text-green-olive mb-2">No hay publicaciones disponibles</h3>
          <p class="text-green-olive opacity-80">Vuelve pronto para ver nuevo contenido</p>
        </div>

        <div v-else class="grid gap-8">
          <article
            v-for="(post, index) in blogs"
            :key="post._id"
            class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden pb-3"
            :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
          >
            <div class="lg:flex">
              <!-- Image placeholder -->
              <div
                class="lg:w-1/3 aspect-square lg:aspect-auto lg:h-64 bg-gradient-to-br from-pink-light to-green-soft flex items-center justify-center overflow-hidden"
              >
                <img :src="post.imageUrl" alt="" class="w-full h-full object-cover" />
              </div>

              <!-- Content -->
              <div class="lg:w-2/3 px-8 pt-5 flex flex-col justify-center">
                <h2
                  class="text-2xl lg:text-3xl font-bold text-green-olive mb-4 transition-colors duration-200"
                >
                  {{ post.title }}
                </h2>
                <p class="text-green-olive opacity-80 mb-6 text-lg leading-relaxed">
                  {{ post.summary }}
                </p>
                <div class="flex items-center justify-between">
                  <RouterLink
                    :to="`/blog/${post.slug}`"
                    class="inline-flex items-center bg-pink-coral hover:bg-pink-light text-cream hover:text-green-olive px-6 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:translate-x-1"
                  >
                    Leer más
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </RouterLink>
                  <time class="text-green-olive opacity-60 font-medium">{{
                    formatDate(post.createdAt)
                  }}</time>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center mt-16" v-if="blogs.length >= 10">
        <div class="flex items-center space-x-4">
          <button
            @click="prevPage"
            :disabled="page === 1"
            class="flex items-center px-6 py-3 bg-white border-2 border-green-soft text-green-olive rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-soft hover:text-cream transition-all duration-200"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Anterior
          </button>

          <span class="px-6 py-3 bg-pink-coral text-cream rounded-xl font-bold text-lg">{{
            page
          }}</span>

          <button
            @click="nextPage"
            :disabled="isLastPage"
            class="flex items-center px-6 py-3 bg-white border-2 border-green-soft text-green-olive rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-soft hover:text-cream transition-all duration-200"
          >
            Siguiente
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, watch } from 'vue'
import { useBlogStore } from '../stores/blog'
import { RouterLink } from 'vue-router'
import { useFormatDate } from '@/composables/useFormatDate'

const blogStore = useBlogStore()
const { formatDate } = useFormatDate()

const page = ref(1)
const blogs = ref([])
const isLastPage = ref(false)

const loading = computed(() => blogStore.loading)

const loadPage = async () => {
  const result = (await blogStore.fetchBlogs(page.value, 10)) || []
  blogs.value = result
  isLastPage.value = result.length < 10
}

onMounted(() => {
  loadPage()
})

watch(page, () => {
  loadPage()
})

const nextPage = () => {
  if (!isLastPage.value) page.value++
}

const prevPage = () => {
  if (page.value > 1) page.value--
}
</script>
