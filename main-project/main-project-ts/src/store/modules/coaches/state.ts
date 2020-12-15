export type Coach = {
  id: string;
  firstName: string;
  lastName: string;
  description: string;
  areas: string[];
  hourlyRate: number;
};

export type CoachesState = {
  coaches: Coach[];
};

export const state: CoachesState = {
  coaches: []
};
