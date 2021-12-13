<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { OrderStatus } from './types'

export default defineComponent({
  props: {
    status: {
      type: String as PropType<OrderStatus>,
      required: true,
    },
  },
  setup() {
    return {
      OrderStatus,
    }
  },
})
</script>

<template>
  <div class="border-2 rounded-xl p-4 w-[50%] mb-4">
    <div class="text-gray-600">
      order status
    </div>
    <div
      class="text-3xl font-bold"
      :class="{ 'text-red-600': status === OrderStatus.Cancelled }"
    >
      {{ status }}
    </div>
  </div>
</template>
