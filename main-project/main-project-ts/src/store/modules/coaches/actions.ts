// import { ActionContext, ActionTree } from "vuex";
// import { Mutations } from "./mutations";
// import { State } from "./state";

// export enum ActionTypes {
//   RegisterCoach = "REGISTER_COACH",
//   LoadCoaches = "LOAD_COACHES"
// }

// type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
//   commit<K extends keyof Mutations>(
//     key: K,
//     payload: Parameters<Mutations[K]>[1]
//   ): ReturnType<Mutations[K]>;
// };

// export type Actions = {
//   [ActionTypes.LoadCoaches](context: ActionAugments): void;
//   [ActionTypes.RegisterCoach](context: ActionAugments): void;
// };

// export const actions: ActionTree<State, State> & Actions = {
//   [ActionTypes.LoadCoaches]({ commit }) {},
//   [ActionTypes.RegisterCoach]({ commit }) {}
// };
