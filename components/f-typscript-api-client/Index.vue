<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { SearchApiFp, SearchResult } from '.'

export default defineComponent({
  setup() {
    const results = ref<SearchResult[]>([])
    const phrase = ref('')

    const fetchResults = async () => {
      results.value = await SearchApiFp({
        accessToken: 'abcde',
      }).getMatchingObservations(phrase.value, 20)()
    }

    watch(phrase, fetchResults)

    return {
      results,
      phrase,
    }
  },
})
</script>

<template>
  <input v-model="phrase" type="text" />
  <ul>
    <li v-for="result in results" :key="result.id">
      {{ result.id }} {{ result.label }} {{ results.name }}
    </li>
  </ul>
</template>
