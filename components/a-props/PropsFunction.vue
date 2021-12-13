<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'

export default defineComponent({
  props: {
    searchFunction: {
      type: Function as PropType<(query: string) => Promise<string[]>>,
      required: true,
    },
  },
  setup(props) {
    const query = ref('')
    const results = ref([])

    watch(query, async () => {
      results.value = await props.searchFunction(query.value)
    })

    return {
      query,
      results,
    }
  },
})
</script>

<template>
  <div class="w-[50%]">
    <input
      v-model="query"
      placeholder="Search car..."
      type="text"
      class="border-2 rounded-md py-2 px-4 w-full"
    >

    <div
      v-if="results.length > 0"
      class="rounded-md shadow-xl border overflow-hidden mt-2 divide-y"
    >
      <button
        v-for="result in results"
        :key="result"
        class="py-2 px-4 text-sm w-full text-left hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-600 focus:outline-none focus:text-white"
      >
        {{ result }}
      </button>
    </div>
  </div>
</template>
