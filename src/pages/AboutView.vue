<template>
  <section class="max-w-4xl mx-auto px-6 py-12">
    <!-- Título -->
    <h1 class="text-4xl font-bold text-gray-800 mb-8 text-center">Sobre mí</h1>

    <!-- Contenido -->
    <div class="flex flex-col md:flex-row items-center gap-8">
      <!-- Foto -->
      <div class="flex-shrink-0">
        <img
          src="/images/foto-perfil.jpg"
          alt="Foto de [Nombre]"
          class="w-48 h-48 object-cover rounded-full shadow-lg"
        />
      </div>

      <!-- Texto -->
      <div class="text-gray-700 leading-relaxed">
        <p class="mb-4">
          ¡Hola! Soy <span class="font-semibold">{{ name }}</span
          >, creadora de <span class="italic">Maternidad y Emociones</span>. Mi pasión es acompañar
          a madres en su camino, ofreciendo consejos, herramientas y contención emocional en cada
          etapa de la maternidad.
        </p>
        <p class="mb-4">
          Creo firmemente que hablar de nuestras emociones y compartir experiencias nos ayuda a
          crecer como personas y como familias. En este espacio, encontrarás reflexiones, consejos
          prácticos y palabras de aliento para esos momentos en los que más lo necesitamos.
        </p>
        <p>Gracias por estar acá y permitirme ser parte de tu camino 💛</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePageDataStore } from '@/stores/pageData'
const { name } = usePageDataStore()
</script>

<style scoped>
/* Si necesitás estilos extra aparte de Tailwind, podrías ponerlos acá */
</style>
