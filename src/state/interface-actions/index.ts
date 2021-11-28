import { STEPS } from "../types";

export interface ISteps {
  type: STEPS.STEPS_REQUEST;
  payload: number;
}

export type IActions = ISteps;
