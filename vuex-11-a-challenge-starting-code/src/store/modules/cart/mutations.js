export default {
  addNewProductToCart(state, payload) {
    state.cart.items.push(payload.value);
  },
  addExistingProductToCart(state, payload) {
    state.cart.items[payload.value].qty++;
  },
  removeProductFromCart(state, payload) {
    const index = state.cart.items.findIndex(x => x.productId === payload.id);

    if (index != -1) {
      state.cart.items.splice(index, 1);
    }
  },
  setCartTotalPrice(state, payload) {
    state.cart.total = payload.value;
  },
  setCartQuantity(state, payload) {
    state.cart.qty = payload.value;
  }
};
