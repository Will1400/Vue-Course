import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "./mutations";
import { CoachesState } from "./state";

export enum ActionTypes {
  RegisterCoach = "REGISTER_COACH",
  LoadCoaches = "LOAD_COACHES"
}

type ActionAugments = Omit<
  ActionContext<CoachesState, CoachesState>,
  "commit"
> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.LoadCoaches](context: ActionAugments): void;
  [ActionTypes.RegisterCoach](context: ActionAugments): void;
};

export const actions: ActionTree<CoachesState, CoachesState> & Actions = {
  async [ActionTypes.LoadCoaches]({ commit }) {
    const result = await fetch(
      `https://vue-main-project-86078-default-rtdb.firebaseio.com/coaches/coaches.json`
    );

    const data = await result.json();
    if (!result.ok) {
      throw new Error(data.message || "Failed to fetch coaches");
    }

    const coaches = [];

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
    commit(MutationType.SetCoaches, coaches);
  },
  [ActionTypes.RegisterCoach]({ commit }) {
    console.log("register");
  }
};
