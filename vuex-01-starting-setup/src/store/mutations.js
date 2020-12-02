export default {
  setAuthState(state, payload) {
    state.isLoggedIn = payload.isAuthenticated;
  }
};
