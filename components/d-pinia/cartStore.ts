import { defineStore } from 'pinia'

type CartItem = { productId: string; amount: number }

export const useCartStore = defineStore('cart', {
  state: () => {
    return { cart: [] as CartItem[] }
  },
  actions: {
    addToCart(cartItem: CartItem) {
      this.cart.push(cartItem)
    },
  },
  getters: {
    productsCount: (state) =>
      state.cart.reduce((acc, item) => acc + item.amount, 0),
  },
})
