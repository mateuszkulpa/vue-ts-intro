<script lang="ts" setup>
import { Ref, ref, watch } from 'vue'

function usePagination<T>(
  fetchFn: (page: number, pageSize: number) => Promise<T[]>
) {
  const isLoading = ref(false)
  const results = ref<T[]>([]) as Ref<T[]>
  const currentPage = ref(1)
  const pageSize = ref(10)

  watch(
    [currentPage, pageSize],
    async () => {
      try {
        isLoading.value = true
        results.value = await fetchFn(currentPage.value, pageSize.value)
      } finally {
        isLoading.value = false
      }
    },
    { immediate: true }
  )

  return {
    results,
    currentPage,
    pageSize,
  }
}

type ListItem = {
  id: string
  label: string
}

async function fetchItems(page: number, pageSize: number): Promise<ListItem[]> {
  return new Array(pageSize).fill(0).map((_, index) => ({
    id: `${page}_${index}`,
    label: `${index} item on ${page} page`,
  }))
}

const { results, currentPage } = usePagination<ListItem>(fetchItems)
</script>

<template>
  <ul>
    <li
      v-for="result in results"
      :key="result.id"
    >
      {{ result.id }}
    </li>
  </ul>
  <button @click="currentPage = currentPage - 1">
    prev page
  </button>
  <button @click="currentPage = currentPage + 2">
    next page
  </button>
</template>
