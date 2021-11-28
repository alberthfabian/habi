import {
  ADD_REQUEST,
  FETCH_REQUEST,
  MODAL_REQUEST,
  DELETE_REQUEST,
  REMOVE_REQUEST,
  LESS_REQUEST,
  // -----------
  STEPS_REQUEST,
} from "../base";

// export const fetchProduct = () => ({
//   type: FETCH_REQUEST,
// });

// export const addProduct = (id: any) => ({
//   type: ADD_REQUEST,
//   payload: id,
// });

// export const deleteProduct = (id: any) => ({
//   type: DELETE_REQUEST,
//   payload: id,
// });

// export const openModal = (open: any) => ({
//   type: MODAL_REQUEST,
//   payload: open,
// });

// export const removeData = (id: any) => ({
//   type: REMOVE_REQUEST,
//   payload: id,
// });

// export const lessData = (id: any) => ({
//   type: LESS_REQUEST,
//   payload: id,
// });

export const fetchSteps = (step: number) => ({
  type: STEPS_REQUEST,
  payload: step,
});
