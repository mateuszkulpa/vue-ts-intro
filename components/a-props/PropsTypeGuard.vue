<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'
import { Question, SingleQuestion, GroupSingleQuestion } from './types'

function isSingleQuestion(question: Question): question is SingleQuestion {
  return question.discriminator === 'single'
}

function isGroupSingleQuestion(
  question: Question
): question is GroupSingleQuestion {
  return question.discriminator === 'group-single'
}

// Single question component
export default defineComponent({
  props: {
    question: {
      type: Object as PropType<Question>,
      required: true,
    },
  },
  setup(props) {
    if (isSingleQuestion(props.question)) {
      // we can render single question safety
      // props.question.answers
    } else if (isGroupSingleQuestion(props.question)) {
      // we can render single question safety
      // props.question.groups
    }
  },
})
</script>
