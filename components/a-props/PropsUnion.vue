<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    type: String as PropType<'pulse' | 'spinner' | 'skeleton'>,
  },
})
</script>

<template>
  <div class="border-2 rounded-xl p-4 w-[50%] flex justify-center mb-4">
    <div
      v-if="type === 'spinner'"
      class="
      animate-spin
      rounded-full
      h-12
      w-12
      border-t-2 border-b-2 border-purple-500
    "
    />
   
    <div
      v-else-if="type === 'skeleton'"
      class="animate-pulse flex space-x-4 w-full"
    >
      <div class="rounded-full bg-gray-100 h-10 w-10" />
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 bg-gray-100 rounded" />
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-gray-100 rounded col-span-2" />
            <div class="h-2 bg-gray-100 rounded col-span-1" />
          </div>
          <div class="h-2 bg-gray-100 rounded" />
        </div>
      </div>
    </div>
    <div v-else-if="type === 'pulse'">
      <span class="flex h-6 w-6 relative">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
        <span class="relative inline-flex rounded-full h-6 w-6 bg-sky-500" />
      </span>
    </div>
  </div>
</template>