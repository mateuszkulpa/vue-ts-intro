<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    date: {
      type: Date,
    },
  },
})
</script>
