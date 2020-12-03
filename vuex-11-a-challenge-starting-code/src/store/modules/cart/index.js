import mutations from './mutations.js';
import actions from './actions.js';

export default {
  state() {
    return { cart: { items: [], total: 0, qty: 0 } };
  },

  mutations: mutations,
  actions: actions,
  getters: {
    cart(state) {
      return state.cart;
    },
    cartItems(_, getters) {
      return getters.cart.items;
    },
    cartTotalPrice(_, getters) {
      return getters.cart.total;
    },
    cartTotalQuantity(_, getters) {
      return getters.cart.qty;
    }
  }
};
