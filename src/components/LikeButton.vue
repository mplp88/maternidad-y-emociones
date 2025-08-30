<template>
  <a href="#" @click.prevent="toggleLike" class="mb-5">
    <i
      :class="{ 'fa-solid': isLiked, 'fa-regular': !isLiked }"
      class="fa-heart fa-xl text-green-olive mx-1"
    ></i>
    <span class="mx-1 text-green-olive">{{ isLiked ? 'Me gustó' : 'Me gusta' }}</span>
  </a>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
  clientId: {
    type: String,
    required: true,
  },
})

const isLiked = ref(false)

// Guardar en localStorage los likes del cliente
const getLocalLikes = () => {
  const likes = JSON.parse(localStorage.getItem('likes') || '[]')
  return likes
}

const saveLocalLike = (slug) => {
  const likes = getLocalLikes()
  if (!likes.includes(slug)) {
    likes.push(slug)
    localStorage.setItem('likes', JSON.stringify(likes))
  }
}

const removeLocalLike = (slug) => {
  let likes = getLocalLikes()
  likes = likes.filter((l) => l !== slug)
  localStorage.setItem('likes', JSON.stringify(likes))
}

// Acción de dar/toggle like
const toggleLike = async () => {
  try {
    const response = await axios.put(`${import.meta.env.VITE_API_URL}/blogs/${props.slug}/like`, {
      clientId: props.clientId,
    })
    if (response.data.liked) {
      isLiked.value = true
      saveLocalLike(props.slug)
    } else {
      isLiked.value = false
      removeLocalLike(props.slug)
    }
  } catch (error) {
    console.error('Error al dar like:', error)
  }
}

onMounted(() => {
  const localLikes = getLocalLikes()
  if (localLikes.includes(props.slug)) {
    isLiked.value = true
  }

  console.log(isLiked.value)
})
</script>
