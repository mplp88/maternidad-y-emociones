<template>
  <div id="app">
    <div>
      <!-- Header -->
      <header class="header shadow-sm">
        <NavBar />
      </header>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style>
@import 'tailwindcss';
@import './assets/palette.css';
</style>
