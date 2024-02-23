import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "./store/action/counterAction";

const App = () => {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch(increase(2))}>Add</button>
      <br />
      <button onClick={() => dispatch(decrease(2))}>Remove</button>
    </div>
  );
};

export default App;

// import React, { useReducer } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increase":
//       if (action.payload) {
//         return (state = state + action.payload);
//       } else {
//         return (state = state + 1);
//       }

//     case "decrease":
//       if (state > 0) {
//         return (state = state - 1);
//       } else {
//         return state;
//       }

//     default:
//       state;
//       break;
//   }
// };

// const App = () => {
//   const [state, dispatcher] = useReducer(reducer, 0);

//   return (
//     <div className="m-10">
//       <h1>{state}</h1>
//       <button onClick={() => dispatcher({ type: "decrease" })}>decrease</button>
//       <br />
//       <button onClick={() => dispatcher({ type: "increase" })}>increase</button>
//       <button onClick={() => dispatcher({ type: "increase", payload: 2 })}>increase 2</button>
//     </div>
//   );
// };

// export default App;
