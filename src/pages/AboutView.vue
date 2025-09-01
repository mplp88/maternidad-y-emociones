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
          <div class="relative flex flex-col items-center gap-4 lg:p-6">
            <div
              class="w-80 h-80 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white mb-2"
            >
              <img
                src="https://res.cloudinary.com/djwpqblr0/image/upload/v1755056434/foto-perfil_c0vgrs.jpg"
                alt="Foto de Caterina Frias"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Social Icons -->
            <div class="flex gap-6 text-4xl p-6">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-600 hover:text-pink-coral transition-colors"
              >
                <i class="fab fa-lg" :class="`fa-${link.icon}`"></i>
              </a>
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
      <div class="grid md:grid-cols-3 gap-8 mt-10 mb-5">
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
      <div class="text-center mb-10">
        <h3 class="text-3xl lg:text-5xl font-bold text-green-olive mb-6" id="formacion">
          Formación
        </h3>
        <div class="grid md:grid-cols-3 gap-8 mt-10 mb-5">
          <div
            class="bg-white rounded-2xl shadow-lg text-center"
            v-for="(item, index) in formationItems"
            :key="index"
          >
            <div
              class="aspect-video bg-white overflow-hidden rounded-t-2xl flex items-center justify-center"
            >
              <img :src="item.logo" class="object-cover" />
            </div>
            <h3 class="text-xl font-bold text-green-olive mt-5 mb-3 px-3">
              {{ item.title }}
            </h3>
            <p
              class="text-green-olive opacity-80 mb-3 px-3"
              v-for="(link, linkIndex) in item.links"
              :key="linkIndex"
            >
              <a :href="link.url" target="_blank">{{ link.text }}</a>
            </p>
            <p class="text-green-olive opacity-80 mb-3 px-3">{{ item.year }}</p>
            <p class="text-pink-coral font-semibold mb-3 px-3">
              <a href="#" @click.prevent="openModal(item.certificateUrl)">Ver certificado</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Modal -->
  <div
    v-if="showModal"
    class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    @click="closeModal"
  >
    <div class="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full p-4">
      <!-- Botón cerrar -->
      <button
        @click="closeModal"
        class="absolute top-2 right-2 text-gray-600 hover:text-pink-coral"
      >
        <i class="fas fa-times fa-lg"></i>
      </button>

      <!-- Imagen del certificado -->
      <img :src="certificateUrl" alt="Certificado" class="w-full h-auto rounded-lg" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePageDataStore } from '@/stores/pageData'
const name = usePageDataStore().name

const certificateUrl = ref('')
const showModal = ref(false)

const openModal = (url) => {
  certificateUrl.value = url
  showModal.value = true
}

const closeModal = () => {
  certificateUrl.value = ''
  showModal.value = false
}

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/maternidadyemociones.cp',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/maternidadyemociones.cp',
    icon: 'instagram',
  },
  // { --- NO EXISTE TODAVIA ---
  //   name: 'X',
  //   url: 'https://www.x.com/maternidadyemociones.cp',
  //   icon: 'x-twitter',
  // },
]

const formationItems = [
  {
    title: 'Doula de Posparto y Crianza',
    logo: 'https://scontent.faep4-3.fna.fbcdn.net/v/t39.30808-6/305749545_514736987321700_2106561817077930096_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFWGU9BpD0Fd63Xx2T7rplrmXG4ozS6lP6ZcbijNLqU_nlmkDtH1Tg53Ej_I6u5gjU&_nc_ohc=QfgBUzKZbaQQ7kNvwExQkqk&_nc_oc=AdnAj2e1RKnIBkTUFdhG2xMCLKRuUYcL3kNTk4qzycGr-jiQJhhM_0aw8iZib8zCR1lAQhgNV2GIFfN4wDIqEJnw&_nc_zt=23&_nc_ht=scontent.faep4-3.fna&_nc_gid=jEl61gtl8ydpHzi3IMAXRQ&oh=00_AfWuZS5F7zVa7Ca4aFIqaHZIFLr5hmr72aKOdz_75DxDbQ&oe=68BAA701',
    links: [
      {
        text: 'Quiero Ser Doula',
        url: 'https://quieroserdoula.com/',
      },
    ],
    certificateUrl:
      'https://res.cloudinary.com/djwpqblr0/image/upload/v1756680781/Diploma_Doula_esghgs.png',
    year: '2023',
  },
  {
    title: 'Diplomatura en Psicología Perinatal',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAtV409drYiGvBQ0-Jga8_zC4tUYFhJ3mtw&s',
    links: [
      {
        text: 'Institute of Medicine and Psychology',
        url: 'https://imepeducation.com/',
      },
      {
        text: 'Universidad Católica de Cuyo',
        url: 'https://uccuyo.edu.ar/',
      },
    ],
    certificateUrl:
      'https://res.cloudinary.com/djwpqblr0/image/upload/v1756680781/Diploma_psicolog%C3%ADa_perinatal_p9wnc2.png',
    year: '2025',
  },
]
</script>
