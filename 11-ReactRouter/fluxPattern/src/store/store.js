import { combineReducers, createStore } from "redux";
import { reducer } from "./reducer/counterReducer";

const combine = combineReducers({
  counter: reducer,
});

export const store = createStore(combine);

// import { combineReducers, createStore } from "redux";
// import reducer from "./reducer/counterReducer";

// const combine = combineReducers({
//   counter: reducer,
// });

// export const store = createStore(combine);
