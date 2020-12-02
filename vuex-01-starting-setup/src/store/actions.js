export default {
  login(context) {
    context.commit('setAuthState', { isAuthenticated: true });
  },
  logout(context) {
    context.commit('setAuthState', { isAuthenticated: false });
  }
};
