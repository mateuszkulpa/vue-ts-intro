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
- Vue with TS (Options API, Composition API, Class components)
- Composition API (ref, reactive, computed, watch, provide/inject)
- Props types (Enums, Validators, Callbacks, Type guards)
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

```javascript
function createOrder(order) {
  axios.post('/orders', order)
}
```

</div>
</div>

---

# Typescript

```typescript {monaco}
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

```typescript {monaco}
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

# Vue.extend

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

