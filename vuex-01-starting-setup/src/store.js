import { createStore } from 'vuex';

const counterModule = {
  //   namespaced: true,

  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter += payload.value;
    }
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 500);
    },
    increase(context, payload) {
      setTimeout(() => {
        context.commit('increase', payload);
      }, 1000);
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;

      if (finalCounter > 100) {
        return 100;
      } else if (finalCounter < 0) {
        return 0;
      }
      return finalCounter;
    }
  }
};

const store = createStore({
  modules: { numbers: counterModule },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: {
    setAuthState(state, payload) {
      state.isLoggedIn = payload.isAuthenticated;
    }
  },
  actions: {
    login(context) {
      context.commit('setAuthState', { isAuthenticated: true });
    },
    logout(context) {
      context.commit('setAuthState', { isAuthenticated: false });
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
});

export default store;
