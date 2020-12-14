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
    },
    setCoaches(state, payload) {
      state.coaches = payload;
    }
  },
  actions: {
    async registerCoach(context, data) {
      const coach = {
        id: context.rootGetters.userId,
        firstName: data.first,
        lastName: data.last,
        description: data.desc,
        hourlyRate: data.rate,
        areas: data.areas
      };

      const result = await fetch(
        `https://vue-main-project-86078-default-rtdb.firebaseio.com/coaches/${context.rootGetters.userId}.json`,
        {
          method: 'PUT',
          body: JSON.stringify({ coach })
        }
      );

      if (!result.ok) {
        console.log('Post failed');
      }

      context.commit('registerCoach', coach);
    },
    async getCoaches(context) {
      const result = await fetch(
        `https://vue-main-project-86078-default-rtdb.firebaseio.com/coaches/${context.rootGetters.userId}.json`
      );

      const data = await result.json();
      if (!result.ok) {
        throw new Error(data.message || 'Failed to fetch coaches');
      }

      let coaches = [];

      for (const key in data) {
        coaches.push({
          id: data[key].id,
          firstName: data[key].firstName,
          lastName: data[key].lastName,
          description: data[key].description,
          hourlyRate: data[key].hourlyRate,
          areas: data[key].areas
        });
      }
      context.commit('setCoaches', coaches);
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
