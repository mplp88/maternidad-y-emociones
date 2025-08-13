import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePageDataStore = defineStore('pageData', () => {
  const pageTitle = ref('Maternidad y emociones')
  const pageDescription = ref('Mamá y Doula diplomada en psicología puerinatal.')
  const name = ref('Caterina Frias')

  return { pageTitle, pageDescription, name }
})
