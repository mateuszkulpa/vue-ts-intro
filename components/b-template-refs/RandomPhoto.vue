<template>
  <div
    class="overflow-hidden rounded-md shadsow-md block object-cover h-48 w-48"
  >
    <img :src="photoUrl" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const photoUrl = ref('https://picsum.photos/300/300?q=x')

    const changePhoto = () => {
      photoUrl.value += 'x'
    }

    return {
      changePhoto,
      photoUrl,
    }
  },
})
</script>
