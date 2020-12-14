export type Coach = {
  id: string;
  firstName: string;
  lastName: string;
  description: string;
  areas: string[];
  hourlyRate: number;
};

export type State = {
  coaches: Coach[];
};

export const state: State = {
  coaches: []
};
