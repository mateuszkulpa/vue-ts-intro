<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { LayoutType } from './types'

export default defineComponent({
  props: {
    layout: {
      type: String as PropType<LayoutType>,
      required: true,
    },
  },
  setup() {
    return {
      LayoutType,
    }
  },
})
</script>

<template>
  <div v-if="layout === LayoutType.Default">
    default layout
  </div>
  <div v-else-if="layout === LayoutType.Sidebar">
    sidebar layout
  </div>
</template>
