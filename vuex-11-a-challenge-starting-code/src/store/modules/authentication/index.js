export default {
  state() {
    return {
      isAuthenticated: false
    };
  },
  mutations: {
    setAuthState(state, payload) {
      state.isAuthenticated = payload.value;
    }
  },
  actions: {
    login(context) {
      context.commit('setAuthState', { value: true });
    },
    logout(context) {
      context.commit('setAuthState', { value: false });
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    }
  }
};
