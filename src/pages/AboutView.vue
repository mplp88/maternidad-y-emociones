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
              >, creadora de <span class="italic font-semibold">Maternidad y Emociones</span> 🌷
            </p>
            <p class="text-lg text-green-olive leading-relaxed mb-6">
              Mi recorrido personal y profesional está profundamente ligado a lo que soy hoy:
              <strong
                >doula de posparto y crianza, diplomada en psicología perinatal y especialista en
                primeros auxilios psicológicos.</strong
              >
            </p>
            <p class="text-lg text-green-olive leading-relaxed mb-6">
              Mi historia con la maternidad comenzó con el nacimiento de mi hijo, en plena pandemia.
              Esa experiencia me mostró cuánta falta hace la empatía, la información y la contención
              real en esos momentos tan sensibles. También me hizo reafirmar algo que ya intuía
              desde mis años de formación docente y mi paso por el ámbito educativo, donde me
              desempeñé como
              <strong
                >ayudante pedagógica: acompañar no es intervenir, sino escuchar, sostener y brindar
                herramientas.</strong
              >
            </p>
            <p class="text-lg text-green-olive leading-relaxed">
              A lo largo del tiempo atravesé mis propios desafíos —una infancia vulnerable,
              problemas de salud, ansiedad, pausas necesarias para cuidar de mí misma—, y de cada
              experiencia aprendí algo valioso sobre la importancia de <strong>ser red</strong>. Por
              eso hoy acompaño a mujeres y familias desde un lugar empático, respetuoso y humano. Mi
              trabajo no busca reemplazar a ningún profesional de la salud, sino complementarlo:
              <strong>trabajo de manera interdisciplinaria</strong>, respetando siempre los límites
              de mi rol, y <strong>sugiriendo acompañamientos especializados</strong> cuando es
              necesario.
            </p>
            <p class="text-lg text-green-olive leading-relaxed">
              Creo profundamente que
              <strong>una maternidad acompañada, respetada y emocionalmente cuidada</strong>
              tiene un impacto directo en la salud mental de las familias y en la forma en que
              criamos a las futuras generaciones.
            </p>
            <p class="text-lg text-green-olive leading-relaxed">
              Este espacio nació para ser eso: un abrazo, un lugar donde podamos hablar de lo que
              duele y también de lo que sostiene. Porque cuando criamos en comunidad, con amor,
              respeto y empatía, estamos transformando el mundo desde la raíz. 🌱
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
            <a href="#" @click.prevent="openModal(item.certificateUrl)">Ver certificado</a>
          </p>
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
    logo: 'https://res.cloudinary.com/djwpqblr0/image/upload/v1762580236/Logo_Quiero_Ser_Doula_wmpuvp.jpg',
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
    certificateUrl:
      'https://res.cloudinary.com/djwpqblr0/image/upload/v1756680781/Diploma_psicolog%C3%ADa_perinatal_p9wnc2.png',
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
    certificateUrl: '',
    year: '2025',
  },
]
</script>
