import { IInitialState, initialState } from "../state";
import {
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_INITIAL,
  ADD_REQUEST,
  MODAL_REQUEST,
  REMOVE_REQUEST,
  LESS_REQUEST,
  // ----------
  STEPS_REQUEST,
} from "../base";

export const reducers = (state: any = initialState, action: any) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      state.data.data = action.payload.data;
      break;

    case FETCH_FAILURE:
      state.data.error = action.payload.error;
      state.data.status = action.payload.status;
      break;

    case FETCH_INITIAL:
      state.data.data = [];
      break;

    case ADD_REQUEST:
      state.add.add = [...state.add.add, action.payload];
      break;

    case LESS_REQUEST:
      state.add.add = [...state.add.add, action.payload];
      break;

    case REMOVE_REQUEST:
      let value = state.add.add;
      value.sort(function (a: any, b: any) {
        return a - b;
      });
      let valueDelete = [];
      for (let i = 0; i < state.add.add.length; i++) {
        if (state.add.add[i] === action.payload) {
          valueDelete.push(i);
        }
      }
      value.splice(valueDelete[0], valueDelete.length);
      state.add.add = [...value];
      break;

    case MODAL_REQUEST:
      state.modal.modal = action.payload;
      break;

    case STEPS_REQUEST:
      state.steps.steps = state.steps.steps + action.payload;
      break;

    default:
      break;
  }
  return state;
};

export default reducers;
