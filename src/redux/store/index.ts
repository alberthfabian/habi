/* eslint-disable import/no-anonymous-default-export */
import { createStore } from "redux";
import reducers from "../reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export default () => {
  return {
    ...createStore(reducers, composeWithDevTools()),
  };
};
