<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'
import { Book } from './types'

export default defineComponent({
  props: {
    // with PropType
    book: {
      type: Object as PropType<Book>,
      required: true,
    },
    // or function returns type
    // book: {
    //   type: Object as () => Book,
    //   required: true
    // }
  },
})
</script>
