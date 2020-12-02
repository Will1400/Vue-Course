import { createStore } from 'vuex';

import productModule from './modules/products/index.js';
import cartModule from './modules/cart/index.js';

const store = createStore({
  modules: { productModule, cartModule },
});

export default store;
