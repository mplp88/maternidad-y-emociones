<template>
  <div class="fixed bottom-4 right-4 space-y-2 z-50">
    <TransitionGroup name="toast-fade-slide">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="[
          'px-6 py-4 rounded shadow-lg text-white transition transform',
          toast.type === 'success' ? 'bg-green-soft' : 'bg-pink-coral',
        ]"
      >
        {{ toast.message }}
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { useToast } from '@/composables/useToast'

const { toasts } = useToast()
</script>

<style scoped>
.toast-fade-slide-enter-active,
.toast-fade-slide-leave-active {
  transition: all 0.4s ease;
}

.toast-fade-slide-enter-from {
  opacity: 0;
  transform: translateY(50%);
}

.toast-fade-slide-leave-to {
  opacity: 0;
  transform: translateY(50%);
}
</style>
