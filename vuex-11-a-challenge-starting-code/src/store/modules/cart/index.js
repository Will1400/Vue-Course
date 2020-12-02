export default {
  state() {
    return { cart: { items: [], total: 0, qty: 0 } };
  },

  mutations: {
    addNewProductToCart(state, payload) {
      state.cart.items.push(payload.value);
    },
    addExistingProductToCart(state, payload) {
      state.cart.items[payload.value].qty++;
    },
    removeProductFromCart(state, payload) {
      const index = state.cart.items.findIndex(x => x.id === payload.id);
      state.cart.items.splice(index, 1);
    },
    setCartTotalPrice(state, payload) {
      state.cart.total = payload.value;
    },
    setCartQuantity(state, payload) {
      state.cart.quantity = payload.value;
    }
  },
  actions: {
    addProductToCart(context, payload) {
      const productData = payload.value;
      const productInCartIndex = context.getters.cartItems.findIndex(
        ci => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        context.commit('addExistingProductToCart', {
          value: productInCartIndex
        });
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1
        };
        context.commit('addNewProductToCart', { value: newItem });
      }

      context.dispatch('updateCartInfo');
    },
    removeProductFromCart(context, payload) {
      context.commit('removeProductFromCart', { id: payload.value });
      context.dispatch('updateCartInfo');
    },
    updateCartInfo(context) {
      const totalPrice = context.getters.cartItems
        .map(x => x.price * x.qty)
        .sum();

      context.commit('setCartTotalPrice', { value: totalPrice });
      context.commit('setCartQuantity', {
        value: context.getters.cartItems.map(x => x.qty).sum()
      });
    }
  },
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
