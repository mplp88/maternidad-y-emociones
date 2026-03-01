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
              class="absolute -top-2 -right-2 w-20 h-20 bg-green-soft rounded-full opacity-60 animate-pulse"
            ></div>
            <div
              class="absolute -bottom-2 -left-2 w-16 h-16 bg-pink-coral rounded-full opacity-60 animate-pulse delay-1000"
            ></div>
          </div>
        </div>

        <!-- Text Content -->
        <!-- Presentación -->
        <section class="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <h2 class="text-3xl lg:text-4xl font-bold text-green-olive mb-6">
            ✨ Hola, soy <span class="text-pink-coral">Caterina</span>
          </h2>

          <p class="text-lg text-green-olive leading-relaxed">
            Mis experiencias durante el embarazo, parto y puerperio —atravesadas por la maternidad
            en pandemia— fueron el punto de partida para crear un lugar de acompañamiento más
            humano, empático y respetuoso.
          </p>
        </section>
      </div>
      <div class="grid lg:grid-cols-3 gap-8 items-center mt-10 mb-10">
        <!-- Historia personal -->
        <section class="bg-pink-light/40 rounded-2xl p-6 shadow-lg h-full">
          <h3 class="text-2xl font-semibold text-green-olive mb-6">🌷 Mi recorrido personal</h3>

          <div class="text-green-olive leading-relaxed text-lg">
            <p>
              Vengo de un contexto vulnerable y de una historia atravesada por desafíos personales y
              de salud que marcaron distintas etapas de mi vida. El arte fue desde temprano un modo
              de sostén y expresión.
            </p>

            <p>
              Años después, un embarazo de alto riesgo me llevó a priorizar mi salud física y mental
              y a profundizar procesos personales acompañados por profesionales.
            </p>

            <p class="font-medium">
              Hoy soy mamá de un niño de 4 años 💜 y continúo aprendiendo a habitar la crianza desde
              la empatía, la presencia y el respeto por los tiempos singulares.
            </p>
          </div>
        </section>

        <!-- Formación profesional -->
        <section class="bg-white rounded-2xl p-6 shadow-lg h-full">
          <h3 class="text-2xl font-semibold text-green-olive mb-6">
            📚 Formación y trabajo profesional
          </h3>

          <div class="text-lg text-green-olive leading-relaxed">
            <p>
              Mi recorrido dentro del ámbito educativo y mi experiencia como ayudante pedagógica me
              permitieron conocer de cerca las dinámicas institucionales y la diversidad de
              necesidades que atraviesan las infancias y sus familias.
            </p>

            <p>
              Actualmente soy
              <span class="font-semibold">doula diplomada en psicología perinatal</span>,
              especialista en primeros auxilios psicológicos y me encuentro en formación como
              instructora de mindfulness.
            </p>

            <p class="italic opacity-80">
              Trabajo desde una mirada de cuidado, prevención y acompañamiento, respetando los
              límites éticos del rol y promoviendo la consulta con profesionales matriculados cuando
              es necesario.
            </p>
          </div>
        </section>

        <!-- Enfoque del espacio -->
        <section class="bg-green-soft/20 rounded-2xl p-6 shadow-lg h-full">
          <h3 class="text-2xl font-semibold text-green-olive mb-6">
            🎶 El espíritu de este espacio
          </h3>

          <p class="text-lg text-green-olive leading-relaxed">
            La música y los lenguajes artísticos funcionan como hilo conductor para narrar procesos
            emocionales ya elaborados y acompañados profesionalmente. A través de ellos busco
            acercar otra mirada sobre la crianza respetuosa: una que reconozca las emociones, el
            cuerpo y la historia personal como parte del aprendizaje y del vínculo.
          </p>
        </section>
      </div>

      <!-- Additional Info Cards -->
      <div class="grid md:grid-cols-3 gap-8 mt-10 mb-10">
        <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
          <div
            class="w-16 h-16 bg-pink-light rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span class="text-2xl">🌷</span>
          </div>
          <h3 class="text-xl font-bold text-green-olive mb-2">Misión</h3>
          <p class="text-green-olive opacity-80">
            Acompañar emocionalmente a mujeres y familias en el postparto y la crianza, ofreciendo
            contención, escucha activa y herramientas psicoeducativas que promuevan el bienestar
            integral. Ser una presencia empática y respetuosa que ayude a transitar los cambios,
            desafíos y duelos que pueden surgir en esta etapa, articulando con profesionales de la
            salud cuando la situación lo requiere.
          </p>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
          <div
            class="w-16 h-16 bg-pink-light rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span class="text-2xl">🌱</span>
          </div>
          <h3 class="text-xl font-bold text-green-olive mb-2">Visión</h3>
          <p class="text-green-olive opacity-80">
            Contribuir a una cultura más empática y consciente, donde el postparto y la crianza sean
            acompañados con respeto, información y amor. Promover una mirada colectiva de la
            crianza, en la que las redes de apoyo, los vínculos saludables y el trabajo
            interdisciplinario sean pilares para el bienestar emocional de las familias y el
            desarrollo de las infancias.
          </p>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
          <div
            class="w-16 h-16 bg-pink-light rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span class="text-2xl">💫</span>
          </div>
          <h3 class="text-xl font-bold text-green-olive mb-2">Valores</h3>
          <p class="text-green-olive opacity-80">
            <span class="font-bold">Empatía:</span> Escuchar y acompañar con sensibilidad, sin
            juicios ni imposiciones. <span class="font-bold">Respeto:</span> Reconocer la
            singularidad de cada historia, cuerpo y camino.
            <span class="font-bold">Acompañamiento consciente:</span>
            Estar presente con atención genuina, conexión emocional y límites claros.
            <span class="font-bold">Interdisciplina:</span> Trabajar en articulación con otros
            saberes para ofrecer un acompañamiento integral y ético.
            <span class="font-bold">Confianza:</span> Creer en las capacidades, decisiones y
            procesos de cada familia. <span class="font-bold">Amor:</span> La base de cada palabra,
            gesto y encuentro.
          </p>
        </div>
      </div>
      <div class="text-center mb-10">
        <h3 class="text-3xl lg:text-5xl font-bold text-green-olive mb-6" id="formacion">
          Formación
        </h3>
        <div class="w-24 h-1 bg-pink-coral mx-auto rounded-full"></div>
      </div>
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
          <p class="text-pink-coral font-semibold mb-3 px-3" v-if="!item.certificateUrl">
            <a href="#" style="cursor: default" @click.prevent>Certificado en emisión</a>
          </p>
          <p class="text-pink-coral font-semibold mb-3 px-3" v-else>
            <a href="#" @click.prevent="openModal(item.certificateUrl)">{{
              'Ver ' +
              (item.certificateUrl.length > 1 ? item.certificateUrl.length + ' ' : '') +
              'certificado' +
              (item.certificateUrl.length > 1 ? 's' : '')
            }}</a>
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- Modal -->
  <div
    v-if="showModal"
    class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    @click="onOverlayClick"
  >
    <!-- Contenedor del modal: evitamos que el click dentro burbujee (opcional) -->
    <div class="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full p-4" @click.stop>
      <!-- Botón cerrar (siempre cierra) -->
      <button
        @click="closeModal"
        class="absolute top-2 right-2 text-gray-600 hover:text-pink-coral transition-colors z-100"
      >
        <i class="fas fa-times fa-lg"></i>
      </button>

      <!-- Contenido: imagen única o carousel -->
      <div v-if="certificateUrl.length === 1">
        <img :src="certificateUrl[0]" :alt="`Certificado`" class="w-full h-auto rounded-lg" />
      </div>

      <Carousel v-else v-bind="carouselConfig">
        <Slide v-for="(image, idx) in certificateUrl" :key="idx">
          <img class="carousel__item" :src="image" :alt="`Imagen ${idx + 1}`" />
        </Slide>

        <template #addons>
          <!-- NO uses @click.stop aquí -->
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePageDataStore } from '@/stores/pageData'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const name = usePageDataStore().name

const certificateUrl = ref('')
const showModal = ref(false)

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: false,
}

const openModal = (urls) => {
  certificateUrl.value = urls
  showModal.value = true
}

const closeModal = () => {
  certificateUrl.value = ''
  showModal.value = false
}

const onOverlayClick = (e) => {
  if (e.target === e.currentTarget) {
    closeModal()
  }
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
    logo: 'https://res.cloudinary.com/djwpqblr0/image/upload/v1762580236/Logo_Quiero_Ser_Doula_wmpuvp.jpg',
    links: [
      {
        text: 'Quiero Ser Doula',
        url: 'https://quieroserdoula.com/',
      },
    ],
    certificateUrl: [
      'https://res.cloudinary.com/djwpqblr0/image/upload/v1756680781/Diploma_Doula_esghgs.png',
    ],
    year: '2023',
  },
  {
    title: 'Diplomatura en Psicología Perinatal',
    logo: 'https://res.cloudinary.com/djwpqblr0/image/upload/v1762580344/Logo_IMEP_benqmx.png',
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
    certificateUrl: [
      'https://res.cloudinary.com/djwpqblr0/image/upload/v1756680781/Diploma_psicolog%C3%ADa_perinatal_p9wnc2.png',
    ],
    year: '2025',
  },
  {
    title: 'Especialización en Primeros Auxilios Psicológicos',
    logo: 'https://res.cloudinary.com/djwpqblr0/image/upload/v1762580687/Logo_Institucion_Badra_niqw6j.png',
    links: [
      {
        text: 'Institución Badra',
        url: 'https://institucionbadra.org/',
      },
    ],
    certificateUrl: [
      'https://res.cloudinary.com/djwpqblr0/image/upload/v1762659495/Diploma_Badra_43886-34514830-18147_gwflon.jpg',
      'https://res.cloudinary.com/djwpqblr0/image/upload/v1762659493/Diploma_SAMUE_43886-34514830-18149_p2jbkp.jpg',
      'https://res.cloudinary.com/djwpqblr0/image/upload/v1762659492/Diploma_CIESa_43886-34514830-18148_poh7lr.jpg',
    ],
    year: '2025',
  },
]
</script>
