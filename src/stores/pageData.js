import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePageDataStore = defineStore('pageData', () => {
  const pageTitle = ref('Maternidad y emociones')
  const pageDescription = ref('Mamá y Doula diplomada en psicología perinatal y duelo gestacional.')
  const name = ref('Caterina')

  return { pageTitle, pageDescription, name }
})
