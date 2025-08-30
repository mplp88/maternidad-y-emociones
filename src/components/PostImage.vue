<template>
  <div class="relative w-full h-full overflow-hidden rounded-2xl" v-if="images.length">
    <div v-if="images.length === 1">
      <img :src="images[0]" :alt="`Imagen 1`" />
    </div>
    <Carousel v-else v-bind="carouselConfig">
      <Slide v-for="(image, idx) in images" :key="idx">
        <img class="carousel__item" :src="image" :alt="`Imagen ${idx + 1}`" />
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
  <span v-else class="text-8xl opacity-60 flex items-center justify-center"> 📖 </span>
</template>

<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: false,
}

defineProps(['images'])
</script>
