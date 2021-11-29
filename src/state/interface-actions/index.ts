import { STEPS } from "../types";

export interface ISteps {
  type: STEPS.STEPS_REQUEST;
  payload: number;
}

export interface ITicket {
  type: STEPS.STEPS_TICKET;
  payload: object;
}

export type IActions = ISteps | ITicket;
