export default {
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
};
