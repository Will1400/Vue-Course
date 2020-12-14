export default {
  namespaced: true,
  state() {
    return {
      requests: []
    };
  },
  mutations: {
    addRequest(state, payload) {
      state.requests.push(payload);
    },
    setRequests(state, payload) {
      state.requests = payload;
    }
  },
  actions: {
    async contactCoach(_, payload) {
      const newRequest = {
        id: new Date().toISOString(),
        coachId: payload.coachId,
        userEmail: payload.email,
        message: payload.message
      };

      const response = await fetch(
        `https://vue-main-project-86078-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
        {
          method: "POST",
          body: JSON.stringify(newRequest)
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to post request");
      }
    },
    async getRequests(context) {
      const response = await fetch(
        `https://vue-main-project-86078-default-rtdb.firebaseio.com/requests/${context.rootGetters.userId}.json`
      );

      console.log("Getting requests");
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to post request");
      }

      const requests = [];

      for (const key in data) {
        requests.push({
          id: data[key].id,
          coachId: data[key].coachId,
          message: data[key].message,
          userEmail: data[key].userEmail
        });
      }

      context.commit("setRequests", requests);
    }
  },
  getters: {
    requests(state, _, _2, rootGetters) {
      return state.requests.filter(x => x.coachId === rootGetters.userId);
    },
    hasRequests(_, getters) {
      return getters.requests && getters.requests.length > 0;
    }
  }
};
