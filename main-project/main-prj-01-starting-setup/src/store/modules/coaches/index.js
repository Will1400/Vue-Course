export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30
        }
      ]
    };
  },
  mutations: {
    registerCoach(state, payload) {
      state.coaches.push(payload);
    }
  },
  actions: {
    registerCoach(context, data) {
      const coach = {
        id: context.rootGetters.userId,
        firstName: data.first,
        lastName: data.last,
        description: data.desc,
        hourlyRate: data.rate,
        areas: data.areas
      };

      context.commit('registerCoach', coach);
    }
  },
  getters: {
    coaches(state) {
      return state.coaches;
    },
    hasCoaches(_, getters) {
      return getters.coaches.length > 0;
    },
    isCoach(_, getters, _2, rootGetters) {
      return getters.coaches.some(x => x.id === rootGetters.userId);
    }
  }
};
