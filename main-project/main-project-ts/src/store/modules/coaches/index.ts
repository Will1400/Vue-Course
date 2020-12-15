// import { Module } from "vuex";
// import { actions } from "./actions";
// import { mutations } from "./mutations";
// import { state } from "./state";

import { RootState } from "@/store/types";
import { Module } from "vuex";
import { CoachesState } from "./state";

// const coaches: Module<state>

export const state: CoachesState = {
  coaches: []
};

export const coaches: Module<CoachesState, RootState> = {
  state
};
