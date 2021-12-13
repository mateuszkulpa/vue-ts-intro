---
# try also 'default' to start simple
theme: default
class: 'text-center'
highlighter: shiki
lineNumbers: true
monaco: true
# some information about the slides, markdown enabled
info: |
  ## Vue + TypeScript introduction
# persist drawings in exports and build
drawings:
  persist: false
---
# Introduction to Vue + TS


---

# Agenda

- Typescript introduction
- Vue with TS (Class components, Options API, Composition API)
- Props types (Implicit, Object, Enum, Union,  Functions, Type guards)
- Composition API (ref, reactive, computed, watch, provide/inject)
- Emits types
- Template ref types - HTML element / Vue components
- Generics (composables, component factory)
- Declare Global properties vue
- Declare types for third-party libraries
- Testing with Typescript
- Types state with Vuex/Pinia
- Refactor apps with Typescript



---

# Typescript

<div class="grid grid-cols-2 gap-4 mb-2">
<div>

```typescript
type Order = {
  clientId: string
  items: {name: string, unitPrice: number}[]
}
 
function createOrder(order: Order) {
  axios.post('/orders', order)
}
```


</div>
<div>

```js
function createOrder(order) {
  axios.post('/orders', order)
}
```

</div>
</div>

---

# Typescript

```ts {monaco}
import axios from 'axios'

type Order = {
  clientId: string
  items: { name: string; unitPrice: number }[]
}

function createOrder(order: Order) {
  axios.post('/orders', order)
}

createOrder({
  clientId: '12345',
  items: [
    {
      name: 'first Item',
      unitPrice: 10.0,
    },
  ],
})
```

---

# Typescript

```ts {monaco}
let numberValue = 4
// let number: number = 4
numberValue = '4'

function getPI() {
  return Math.PI
}
// or
// function getPI() : number {
//   return Math.PI
// }

function handleKeydown(event) {}

// function handleKeydown(event: KeyboardEvent){
//   event
// }
```


---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

# Vue with TypeScript

- Class-Style Vue Component
- Options API
    - Vue.extend - Vue 2
    - defineComponent - Vue 3 / Vue 2 with Composition API plugin
- Composition API

---

# Vue class components

```typescript
import Vue from 'vue'
import Component from 'vue-class-component'

// Define the props by using Vue's canonical way.
const GreetingProps = Vue.extend({
  props: {
    name: String
  }
})

// Use defined props by extending GreetingProps.
@Component
export default class Greeting extends GreetingProps {
  greeting = 'Hello'

  get message(): string {
    return `${this.greeting}, ${this.name}`
  }
}
```

---

# Options API - Vue.extend

Only for Vue 2

```typescript
import Vue from 'vue'

const Component = Vue.extend({
  data () {
    return {
      msg: 'Hello'
    }
  },
  methods: {
    // need annotation due to `this` in return type
    greet (): string {
      return this.msg + ' world'
    }
  },
  computed: {
    // need annotation
    greeting(): string {
      return this.greet() + '!'
    }
  }
})
```

---

# Options API - defineComponent

```ts {monaco}
import { defineComponent } from 'vue' // Vue 3
// import { defineComponent } from '@vue/composition-api' // Vue 2

export default defineComponent({
  props: {
    date: {
      type: Date,
      required: true,
    },
  },
  computed: {
    formattedDate(): string {
      return new Intl.DateTimeFormat('en-US').format(this.date)
    },
  },
  created() {
    // this
  },
})
```

---

# Composition API

```ts {monaco}
import { defineComponent, computed } from 'vue' // Vue 3
// import { defineComponent, computed } from '@vue/composition-api' // Vue 2

export default defineComponent({
  props: {
    date: {
      type: Date,
      required: true,
    },
  },
  setup(props) {
    const formattedDate = computed(() =>
      new Intl.DateTimeFormat('en-US').format(props.date)
    )
    return {
      formattedDate,
    }
  },
})
```

---

# Typing props

<APropsProps />

---

# Composition API - ref

```ts {monaco}
import { ref } from 'vue'

const primitiveRef = ref('test')
// const primitiveRef = ref<string>('test')
primitiveRef.value = 4

const undefinedRef = ref() // ❌
undefinedRef.value.x = 5
const undefinedOrNumberRef = ref<number | undefined>() // ✅
undefinedOrNumberRef.value = 'fasf'
undefinedOrNumberRef.value = 5

const arrayRef = ref([]) // ❌
const arrayExplicitRef = ref<number[]>([]) // ✅
const arrayImplicitRef = ref([1, 2, 3]) // ✅
arrayRef.value = [1, 2, 3]
arrayExplicitRef.value = [1, 2, 3]
arrayImplicitRef.value = [1]

const objectImplicitRef = ref({ id: 1 }) // ✅
const objectExplicitRef = ref<{ id: number }>({ id: 1 }) // ✅
objectImplicitRef.value.id = 2
objectExplicitRef.value = { id: 1 }
```

---

# Composition API - reactive

```ts {monaco}
import { reactive } from 'vue'

type Person = {
  firstName: string
  lastName: string
  //dateBirth: Date
}

const reactivePerson = reactive({
  firstName: 'Jan',
  lastName: 'Kowalski',
}) 

const reactivePerson2 = reactive<Person>({
  firstName: 'Jan',
  lastName: 'Kowalski',
})
```

---

# Composition API - computed

```ts {monaco}
import { ref, computed } from 'vue'

const dateFrom = ref(new Date('2021-12-01'))
const dateTo = ref(new Date('2021-12-31'))

const daysBetween = computed(
  () => (dateFrom.value.getTime() - dateTo.value.getTime()) / (1000 * 3600 * 24) // + 'days'
)

const daysBetweenNumber = computed<number>(
  () => (dateFrom.value.getTime() - dateTo.value.getTime()) / (1000 * 3600 * 24) // + 'days'
)
```

---

# Composition API - computed get/set

```ts {monaco}
import { defineComponent, computed } from 'vue'

defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const innerValue = computed<Boolean>({
      get() {
        return props.modelValue
      },
      set(newValue) {
        emit('update:modelValue', newValue)
      },
    })
    return {
      innerValue,
    }
  },
})
```

---

# Composition API - watch

```ts {monaco} 
import { ref, watch, Ref } from 'vue'

const query = ref<string>('')
// const query = ref<number>(1)

watch(query, (newValue) => {
  console.log(newValue)
})

watch<string>(query, (newValue) => {
  console.log(newValue)
})

// multiple sources
const pageSize = ref(10)
watch([query, pageSize], ([newQuery, newPageSize]) => {
  console.log({ newQuery, newPageSize })
})
```

---

# Composition API - provide/inject

```ts {monaco}
import { ref, Ref, provide, inject, InjectionKey } from 'vue'

const isMobile = ref(false)
provide('isMobile', isMobile)

// in other component..
const injectedIsMobile = inject<Ref<boolean>>('isMobile') // undefined or boolean
const injectedIsMobileWithDefault = inject<Ref<boolean>>('isMobile', ref(false)) // boolean

// ----
// with injection key ✅
const darkModeInjectionKey: InjectionKey<boolean> = Symbol()
const darkMode = false

provide(darkModeInjectionKey, darkMode)
// provide(darkModeInjectionKey, 'dark')

// in other component..
const injectedDarkMode = inject(darkModeInjectionKey, false) // type is get from injection key
```

---

# Typing emits

```ts {monaco}
import { defineComponent } from 'vue'

defineComponent({
  // emits: ['dateChanged'],
  emits: {
    dateChanged: (date: Date) => {
      // ... check is value correct
      return true
    },
  },
  setup(_, { emit }) {
    emit('dateChanged', 'test') // ❌
    emit('dateChanged', new Date()) // ✅
  },
})
```

---

# Typing template ref

