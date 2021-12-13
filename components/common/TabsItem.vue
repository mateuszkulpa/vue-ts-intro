<template>
  <slot />
</template>

<script lang="ts" setup>
defineProps({
    label: {
        type: String,
        required: true
    }
})
</script>