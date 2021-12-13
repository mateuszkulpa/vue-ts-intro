import { Ref, ref, watch } from 'vue'

export default function usePagination<T>(
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
