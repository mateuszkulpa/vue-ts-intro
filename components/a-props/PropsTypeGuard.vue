<script lang="tsx">
import { defineComponent, PropType } from 'vue'
import { Question, SingleQuestion, GroupSingleQuestion } from './types'

function isSingleQuestion(question: Question): question is SingleQuestion {
  return question.discriminator === 'single'
}

function isGroupSingleQuestion(
  question: Question
): question is GroupSingleQuestion {
  return question.discriminator === 'group-single'
}

export default defineComponent({
  props: {
    question: {
      type: Object as PropType<SingleQuestion | GroupSingleQuestion>,
      required: true,
    },
  },
  setup(props) {
    
    const title = <h5 class="font-semibold">{props.question.title}</h5>
    let body = <div>question fallback..</div>

    if (isSingleQuestion(props.question)) {
      body = (
        <div class="flex space-x-4 mt-4">
          {props.question.answers.map((answer) => (
            <div
              class="flex flex-1 h-24 items-center justify-center border-2 rounded-md hover:bg-gray-100"
              key={answer.id}
            >
              {answer.label}
            </div>
          ))}
        </div>
      )
    }

    if (isGroupSingleQuestion(props.question)) {
      console.log('group single', props.question)
      body = 
        <div class="divide-y mt-4">
          {props.question.groups.map(({label, answers}) => 
            <div class="flex justify-between py-2">
              <span>{label}</span>
              <div class="flex space-x-2">
                {answers.map(({label}) => <div>{label}</div>)}
              </div>
            </div>
          )}
        </div>
      
    }

    return () => (
      <div class="border-2 rounded-xl p-4 w-[50%] mb-4">
        {title}
        {body}
      </div>
    )
  },
})
</script>
