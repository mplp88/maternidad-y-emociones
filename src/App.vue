<template>
  <div id="app">
    <div class="min-h-screen bg-stone-50">
      <!-- Header -->
      <header class="bg-white shadow-sm">
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

/* body {
  margin: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-height: 100vh;
}

.router-link-active {
  color: #f87171;
} */
</style>
