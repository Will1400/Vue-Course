import { createStore } from 'vuex';

import productModule from './modules/products/index.js';
import cartModule from './modules/cart/index.js';
import authenticationModule from './modules/authentication/index.js';

const store = createStore({
  modules: { productModule, cartModule, authenticationModule }
});

export default store;
