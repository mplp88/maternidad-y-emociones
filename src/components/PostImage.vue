<template>
  <div
    class="aspect-square bg-gradient-to-br from-pink-light to-green-soft flex items-center justify-center relative overflow-hidden rounded-2xl"
  >
    <!-- Sin imágenes -->
    <span v-if="!images?.length" class="text-8xl opacity-60">📖</span>

    <!-- Una sola imagen -->
    <img
      v-else-if="images.length === 1"
      :src="images[0]"
      :alt="alt"
      class="w-full h-full object-cover"
    />

    <!-- Varias imágenes: carrusel -->
    <div v-else class="w-full h-full relative">
      <!-- Imagen actual -->
      <img
        :src="images[currentIndex]"
        :alt="alt"
        class="w-full h-full object-cover transition-opacity duration-500"
      />

      <!-- Flechas -->
      <button
        @click="prev"
        class="absolute left-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-opacity-70"
        style="background: rgba(0, 0, 0, 0.4)"
      >
        <i class="fas fa-chevron-left"></i>
      </button>
      <button
        @click="next"
        class="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-opacity-70"
        style="background: rgba(0, 0, 0, 0.4)"
      >
        <i class="fas fa-chevron-right"></i>
      </button>

      <!-- Puntitos -->
      <div class="absolute bottom-2 w-full flex justify-center space-x-1">
        <span
          v-for="(img, idx) in images"
          :key="idx"
          class="w-2 h-2 rounded-full"
          :class="idx === currentIndex ? 'bg-white' : 'bg-gray-400 opacity-60'"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['images', 'alt'])

const currentIndex = ref(0)

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + (Array.isArray(props.images) ? props.images.length : 0)) %
    props.images.length
}

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}
</script>
