export default {
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
};
