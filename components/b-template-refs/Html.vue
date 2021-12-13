<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  setup() {
    const elementRef = ref<HTMLElement>()
    const inputRef = ref<HTMLInputElement>()

    onMounted(() => {
      if (elementRef.value) {
        //elementRef.value.focus()
      }

      if (inputRef.value) {
        //inputRef.value.value
      }
    })

    return {
      elementRef,
      inputRef,
    }
  },
})
</script>

<template>
  <div class="grid grid-cols-4">
    <div
      ref="elementRef"
      class="h-48 w-48 rounded-md shadow-md bg-purple-600 text-white flex justify-center items-center"
    >
      html element
    </div>
    <div>
      <input
        ref="inputRef"
        type="text"
        class="border-2 rounded-md py-2 px-4"
        value="input element"
      />
    </div>
  </div>
</template>
