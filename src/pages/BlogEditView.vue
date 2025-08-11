<template>
  <div class="p-4 max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Editar publicación</h1>
    <p class="text-gray-600">Editando post con ID: {{ id }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id
</script>
