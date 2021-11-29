import { STEPS } from "../types";
import { IActions } from "../interface-actions";
import { steps, ticket } from "../action";
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
      localStorage.setItem("step", newState.steps.steps.toString());
      return newState;
    case STEPS.STEPS_TICKET:
      const newTicket = {
        ...state,
        ticket: {
          ...ticket,
          ticket: action.payload,
        },
      };
      return newTicket;
    default:
      return state;
  }
};

export default reducer;
