<template>
  <PropsImplicit :label="'f'" />
  <PropsObject :book="{ title: '', year: 1323 }" />
  test 123 
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PropsObject from './PropsObject.vue'
import PropsImplicit from './PropsImplicit.vue'

export default defineComponent({
  components: { PropsImplicit, PropsObject },
})
</script>
