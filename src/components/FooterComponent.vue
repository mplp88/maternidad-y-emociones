<template>
  <footer class="footer">
    <div class="max-w-6xl mx-auto px-6 py-10">
      <p class="text-center text-green-olive opacity-80">
        &copy; {{ copyrightYear }} Maternidad y Emociones. Todos los derechos reservados.
      </p>
      <p class="text-center text-green-olive opacity-80">
        <a href="https://martinponce.com.ar" target="_blank"
          >Desarrollado por <span class="font-semibold">Martín Ponce</span></a
        >
      </p>
    </div>
  </footer>
</template>

<script setup>
const copyrightYear = new Date().getFullYear()
</script>
