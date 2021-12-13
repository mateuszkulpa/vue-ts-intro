<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true
    },
    available: {
      type: Boolean,
      default: true
    },
  }
});
</script>

<template>
  <div class="border-2 rounded-xl p-4 w-[50%]">
    <h3 class="text-xl font-bold">
      {{ name }}
    </h3>
    <h5 class="py-2 text-gray-500">
      ${{ price }} <small class="text-lg"> / kg</small>
    </h5>
    <hr>
    <button
      v-if="available"
      class="mt-4 px-6 py-3 block text-white bg-blue-500 hover:bg-blue-700 rounded"
    >
      Purchase
    </button>
  </div>
</template>
