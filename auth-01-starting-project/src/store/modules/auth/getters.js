export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(_, getters) {
    return !!getters.token;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  }
};
