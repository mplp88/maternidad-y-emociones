<template>
  <div id="app">
    <div>
      <!-- Header -->
      <header class="header shadow-sm">
        <NavBar />
      </header>
      <RouterView></RouterView>
      <FooterComponent></FooterComponent>
      <ToastContainer></ToastContainer>
    </div>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'
import ToastContainer from '@/components/ToastContainer.vue'
</script>

<style>
@import './assets/base.css';
</style>
