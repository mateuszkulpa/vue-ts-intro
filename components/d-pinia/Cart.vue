<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useCartStore } from './cartStore'

export default defineComponent({
  setup() {
    const cartStore = useCartStore()

    const addToCart = () => {
      cartStore.addToCart({
        productId: 'test-product',
        amount: 1,
      })
    }

    return {
      addToCart,
      count: computed(() => cartStore.productsCount),
      cart: computed(() => cartStore.cart),
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
