export default {
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
    const prices = context.getters.cartItems.map(x => x.price * x.qty);
    let totalPrice = 0;
    prices.forEach(item => {
      totalPrice += item;
    });

    let quantity = 0;
    context.getters.cartItems
      .map(x => x.qty)
      .forEach(x => {
        quantity += x;
      });

    context.commit('setCartTotalPrice', { value: totalPrice.toFixed(2) });
    context.commit('setCartQuantity', { value: quantity });
  }
};
