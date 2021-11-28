import bankReducer from "./reducer";

const reducers = bankReducer;

export default reducers;

export type State = ReturnType<typeof reducers>;
