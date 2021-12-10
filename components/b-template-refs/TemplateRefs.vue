<script lang="ts">
import { defineComponent, ref } from 'vue'

const PropsImplicit = defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
  },
})
const x = ref<InstanceType<typeof PropsImplicit> | null>(null)
console.log(x)
</script>
