<template>
  <section class="bg-gradient-to-br from-cream via-pink-light to-cream min-h-screen py-10">
    <div v-if="underConstruction" class="text-center py-20">
      <h2 class="text-2xl font-bold text-green-olive">Sitio en construcción</h2>
      <p class="text-green-olive">Estamos trabajando para mejorar tu experiencia.</p>
      <p class="text-green-olive text-2xl py-2">
        <a
          href="https://www.instagram.com/maternidadyemociones.cp/"
          target="_blank"
          class="text-pink-coral"
          >Mientras tanto, podés seguirme en <i class="fa-brands fa-instagram"></i> Instagram como
          @maternidadyemociones.cp</a
        >
      </p>
    </div>
    <div class="max-w-6xl mx-auto px-6" v-else>
      <!-- Header -->
      <div class="text-center mb-10">
        <h1 class="text-5xl lg:text-6xl font-bold text-green-olive">Sobre mí</h1>
        <div class="w-24 h-1 bg-pink-coral mx-auto rounded-full"></div>
      </div>

      <!-- Main Content -->
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Photo Section -->
        <div class="flex justify-center lg:justify-center">
          <div class="relative">
            <div
              class="w-80 h-80 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white"
            >
              <img
                src="https://res.cloudinary.com/djwpqblr0/image/upload/v1755056434/foto-perfil_c0vgrs.jpg"
                alt="Foto de Caterina Frias"
                class="w-full h-full object-cover"
              />
            </div>
            <!-- Decorative elements -->
            <div
              class="absolute -top-4 -right-4 w-20 h-20 bg-green-soft rounded-full opacity-60 animate-pulse"
            ></div>
            <div
              class="absolute -bottom-6 -left-6 w-16 h-16 bg-pink-coral rounded-full opacity-60 animate-pulse delay-1000"
            ></div>
          </div>
        </div>

        <!-- Text Content -->
        <div class="space-y-8">
          <div class="bg-white rounded-2xl p-8 shadow-xl">
            <p class="text-lg text-green-olive leading-relaxed mb-6">
              ¡Hola! Soy <span class="font-bold text-pink-coral text-xl">{{ name }}</span
              >, creadora de <span class="italic font-semibold">Maternidad y Emociones</span>. Mi
              pasión es acompañar a madres en su camino, ofreciendo consejos, herramientas y
              contención emocional en cada etapa de la maternidad.
            </p>
            <p class="text-lg text-green-olive leading-relaxed mb-6">
              Creo firmemente que hablar de nuestras emociones y compartir experiencias nos ayuda a
              crecer como personas y como familias. En este espacio, encontrarás reflexiones,
              consejos prácticos y palabras de aliento para esos momentos en los que más lo
              necesitamos.
            </p>
            <p class="text-lg text-green-olive leading-relaxed font-medium">
              Gracias por estar acá y permitirme ser parte de tu camino
              <span class="text-2xl">💛</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Additional Info Cards -->
      <div class="grid md:grid-cols-3 gap-8 mt-10">
        <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
          <div
            class="w-16 h-16 bg-pink-light rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span class="text-2xl">🤱</span>
          </div>
          <h3 class="text-xl font-bold text-green-olive mb-2">Maternidad</h3>
          <p class="text-green-olive opacity-80">
            Acompañamiento en cada etapa del camino maternal
          </p>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
          <div
            class="w-16 h-16 bg-green-soft rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span class="text-2xl">💚</span>
          </div>
          <h3 class="text-xl font-bold text-green-olive mb-2">Emociones</h3>
          <p class="text-green-olive opacity-80">
            Herramientas para gestionar y comprender tus emociones
          </p>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
          <div
            class="w-16 h-16 bg-pink-coral rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span class="text-2xl">🌱</span>
          </div>
          <h3 class="text-xl font-bold text-green-olive mb-2">Crecimiento</h3>
          <p class="text-green-olive opacity-80">Desarrollo personal y familiar en armonía</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { usePageDataStore } from '@/stores/pageData'
const name = usePageDataStore().name

const underConstruction = ref(true)
</script>
