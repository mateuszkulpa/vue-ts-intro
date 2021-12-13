<script lang="ts">
import usePagination from './usePagination'
import { fetchGenres } from './api'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const { results, currentPage } = usePagination(fetchGenres)

    return {
      results,
      currentPage,
    }
  },
})
</script>

<template>
  <div>
    <h3>Current page: {{ currentPage }}</h3>
    <ul>
      <li v-for="result in results" :key="result.id">
        {{ result.name }}
      </li>
    </ul>
    <div class="mt-4 space-x-4">
      <button
        class="btn"
        :disabled="currentPage <= 1"
        @click="currentPage = currentPage - 1"
      >
        prev page
      </button>

      <button class="btn" @click="currentPage = currentPage + 1">
        next page
      </button>
    </div>
  </div>
</template>

<style>
.btn {
  @apply px-4 py-3 text-white bg-purple-500 disabled:bg-gray-300 rounded-lg;
}
</style>
