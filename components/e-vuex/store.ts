import { createStore } from 'vuex'

type CartItem = { productId: string; amount: number }

const store = createStore<{ cart: CartItem[] }>({
  state() {
    return {
      cart: [],
    }
  },
  getters: {
    productsCount: (state) =>
      state.cart.reduce((acc, item) => acc + item.amount, 0),
  },
  actions: {
    addToCart({ commit }, cartItem: CartItem) {
      commit('ADD_TO_CART', cartItem)
    },
  },
  mutations: {
    ADD_TO_CART(state, cartItem: CartItem) {
      state.cart.push(cartItem)
    },
  },
})

export default store
