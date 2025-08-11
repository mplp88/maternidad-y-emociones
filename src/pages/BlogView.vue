<template>
  <section class="max-w-4xl mx-auto px-6 py-12">
    <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center">Blog</h1>

    <!-- Loader -->
    <div v-if="loading" class="text-center text-gray-500">Cargando publicaciones...</div>

    <!-- Lista de blogs -->
    <div v-else class="space-y-6">
      <div v-if="blogs.length === 0" class="text-center text-gray-500">
        No hay publicaciones disponibles.
      </div>
      <article
        v-else
        v-for="post in blogs"
        :key="post._id"
        class="border rounded-lg p-6 shadow hover:shadow-lg transition"
      >
        <h2 class="text-xl font-semibold text-blue-600 mb-2">
          {{ post.title }}
        </h2>
        <p class="text-gray-600 mb-4">
          {{ post.summary }}
        </p>
        <RouterLink :to="`/blog/${post._id}`" class="text-blue-500 hover:underline">
          Leer más <FontAwesomeIcon :icon="byPrefixAndName.fas['faArrowRight']" class="mr-2" />
        </RouterLink>
      </article>
    </div>

    <!-- Paginación -->
    <div class="flex justify-center mt-8 gap-2" v-if="blogs.length >= 10">
      <button
        @click="prevPage"
        :disabled="page === 1"
        class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        ← Anterior
      </button>
      <span class="px-4 py-2">{{ page }}</span>
      <button @click="nextPage" :disabled="isLastPage" class="px-4 py-2 bg-gray-200 rounded">
        Siguiente →
      </button>
    </div>
  </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed, ref, onMounted, watch } from 'vue'
import { useBlogStore } from '../stores/blog'
import { RouterLink } from 'vue-router'

const blogStore = useBlogStore()

const page = ref(1)
const blogs = ref([])
const isLastPage = ref(false)

const loading = computed(() => blogStore.loading)

const loadPage = async () => {
  const result = (await blogStore.fetchBlogs(page.value, 10)) || []
  blogs.value = result
  isLastPage.value = result.length < 10
}

onMounted(loadPage)

watch(page, loadPage)

const nextPage = () => {
  if (!isLastPage.value) page.value++
}

const prevPage = () => {
  if (page.value > 1) page.value--
}
</script>
