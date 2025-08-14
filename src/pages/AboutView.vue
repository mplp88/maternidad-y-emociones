<template>
  <section class="bg-cream min-h-screen py-10">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-10">
        <h1 class="text-5xl lg:text-6xl font-bold text-green-olive mb-6">Sobre mí</h1>
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
              >, creadora de <span class="italic font-semibold">Maternidad y Emociones</span>.
              Durante muchos años cursé el profesorado de Nivel Inicial, pero, por circunstancias de
              la vida, justo antes de recibirme tuve que dejarlo. Más adelante estudié
              Psicopedagogía, Psicología y Puericultura, aunque nuevamente la falta de una red de
              apoyo sólida me llevó a priorizar lo más importante: estar presente para mi hijo.
            </p>
            <p class="text-lg text-green-olive leading-relaxed mb-6">
              Lejos de rendirme, esas experiencias me hicieron ver con claridad las carencias que
              existen a la hora de acompañar a las díadas mamá-bebé, y la falta de información que
              todavía hay sobre el desarrollo infantil. Fue así como decidí formarme como doula y
              realizar una Diplomatura en Psicología Perinatal, para poder acompañar a mujeres y
              familias no solo en la decisión de tener un bebé, sino también en todo el proceso: la
              gestación en sus distintas etapas, el puerperio, los duelos, la sexualidad después de
              la maternidad/paternidad, y más.
            </p>
            <p class="text-lg text-green-olive leading-relaxed">
              Hoy, mi formación docente se complementa con mi labor como doula, para sostener a las
              familias que sienten que “están haciendo todo mal” y recordarles que, en realidad,
              están haciendo lo mejor que pueden con las herramientas que tienen. Mi misión es
              acompañar, escuchar sin juicios y ser parte de esa red que tantas veces necesitamos
              para criar en paz.
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
            <span class="text-2xl">🌱</span>
          </div>
          <h3 class="text-xl font-bold text-green-olive mb-2">Misión</h3>
          <p class="text-green-olive opacity-80">
            A través de mis palabras acompañar a mujeres y familias en las distintas etapas de la
            maternidad y la crianza, brindando apoyo emocional, contención y herramientas prácticas.
            Ser una presencia que escuche sin juicios y ayude a transitar gestaciones, puerperios,
            duelos y desafíos cotidianos con confianza y calma.
          </p>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
          <div
            class="w-16 h-16 bg-pink-light rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span class="text-2xl">🌟</span>
          </div>
          <h3 class="text-xl font-bold text-green-olive mb-2">Visión</h3>
          <p class="text-green-olive opacity-80">
            Contribuir a una sociedad más empática y consciente, donde la maternidad y la crianza
            sean experiencias sostenidas por una red de apoyo sólida, respetuosa y amorosa. Inspirar
            un cambio cultural en el que criar no sea tarea exclusiva de la madre o el padre, sino
            de toda la comunidad.
          </p>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
          <div
            class="w-16 h-16 bg-pink-light rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span class="text-2xl">💗</span>
          </div>
          <h3 class="text-xl font-bold text-green-olive mb-2">Valores</h3>
          <p class="text-green-olive opacity-80">
            <span class="font-bold">Empatía:</span> Escuchar y acompañar desde el respeto, sin
            juicios.<br />
            <span class="font-bold">Respeto por la diversidad:</span> Cada familia, madre y niño son
            únicos; sus caminos también.<br />
            <span class="font-bold">Acompañamiento consciente:</span> Presencia real, conexión
            emocional y sostén en momentos clave.<br />
            <span class="font-bold">Confianza:</span> Creer en las capacidades y decisiones de las
            familias.<br />
            <span class="font-bold">Amor:</span> El motor principal de cada palabra, acción y gesto.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePageDataStore } from '@/stores/pageData'
const name = usePageDataStore().name
</script>
