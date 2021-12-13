<template>
  <div class="mt-8 grid grid-cols-2 place-items-center">
    <div>
      vue child component
      <RandomPhoto ref="childRef" class="mt-2" />
    </div>
    <div>
      <button
        class="bg-purple-500 hover:bg-purple-600 text-white py-3 px-5 rounded-lg shadow-lg cursor-pointer"
        @click="invokeChildMethod"
      >
        Invoke child method
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import RandomPhoto from './RandomPhoto.vue'

export default defineComponent({
  components: {
    RandomPhoto,
  },
  setup() {
    const childRef = ref<InstanceType<typeof RandomPhoto>>()

    const invokeChildMethod = () => {
      childRef.value?.changePhoto()
    }

    return {
      childRef,
      invokeChildMethod,
    }
  },
})
</script>
