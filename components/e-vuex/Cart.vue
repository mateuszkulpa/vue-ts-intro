<script lang="ts">
import { defineComponent, computed } from 'vue'
import store from './store'

export default defineComponent({
  setup() {
    const addToCart = () => {
      store.dispatch('addToCart', {
        productId: 'test-product',
        amount: 1,
      })
    }

    return {
      addToCart,
      count: computed(() => store.getters.productsCount),
      cart: computed(() => store.state.cart),
    }
  },
})
</script>

<template>
  <div>
    <button @click="addToCart">add cart item</button>
  </div>
  <div>cart: {{ cart }}</div>
  <div>count of products: {{ count }}</div>
</template>
