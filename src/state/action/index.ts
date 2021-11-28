import { Dispatch } from "redux";
import { STEPS } from "../types";
import { IActions } from "../interface-actions";

export const steps = (step: number) => {
  return (dispatch: Dispatch<IActions>) => {
    dispatch({
      type: STEPS.STEPS_REQUEST,
      payload: step,
    });
  };
};
