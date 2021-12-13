<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Book } from './types'

export default defineComponent({
  props: {
    // with PropType
    book: {
      type: Object as PropType<Book>,
      required: true,
    },
    // or function returns type
    // book: {
    //   type: Object as () => Book,
    //   required: true
    // }
  },
})
</script>

<template>
  <div
    class="bg-white rounded-xl overflow-hidden border-2 w-[75%] grid grid-cols-2"
  >
    <div>
      <img class="w-80 aspect-w-1 aspect-h-1" :src="book.photoUrl" />
    </div>

    <div class="p-4 flex flex-col items-start">
      <h1 class="text-xl font-bold hover:underline cursor-pointer">
        {{ book.title }}
      </h1>
      <p class="mt-2 font-sans text-gray-700">by {{ book.author }}</p>
      <div class="flex-1" />
      <span
        class="bg-red-500 py-2 px-4 text-sm font-semibold text-white rounded-full cursor-pointer"
      >
        {{ book.year }}
      </span>
    </div>
  </div>
</template>
