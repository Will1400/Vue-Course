import { CoachesState, Coach } from "./state";

export enum MutationType {
  SetCoaches = "SET_COACHES"
}

export type Mutations = {
  [MutationType.SetCoaches](state: CoachesState, coaches: Coach[]): void;
};

export const mutations: Mutations = {
  [MutationType.SetCoaches](state, coaches) {
    state.coaches = coaches;
  }
};
