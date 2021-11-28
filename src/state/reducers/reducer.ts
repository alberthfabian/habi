import { STEPS } from "../types";
import { IActions } from "../interface-actions";
import { steps } from "../action/index";
import { IInitialstate, initialState } from "../state";

const reducer = (
  state: IInitialstate = initialState,
  action: IActions
): any => {
  switch (action.type) {
    case STEPS.STEPS_REQUEST:
      const newState = {
        ...state,
        steps: {
          ...steps,
          steps: state.steps.steps + action.payload,
        },
      };
      return newState;
    default:
      return state;
  }
};

export default reducer;
