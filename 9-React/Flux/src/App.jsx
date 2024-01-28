import React, { useReducer } from "react";
import { Button } from "./components/ui/button";

const reducer = (store, action) => {
  switch (action.type) {
    case "increment":
      {
        return (store = store + 1);
      }
      break;
    case "decrement":
      {
        if (store > 0) {
          return (store = store - 1);
        } else {
          return store;
        }
      }
      break;
    default: {
      return store;
    }
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  const handleRemove = () => {
    dispatch({ type: "decrement" });
  };

  const handleAdd = () => {
    dispatch({ type: "increment" });
  };

  return (
    <div className="container">
      <h1 className=" text-2xl font-bold mb-5">Add & Remove</h1>
      <div className="flex items-center gap-5">
        <Button onClick={handleRemove}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </Button>
        <h2 className=" text-xl">{count}</h2>
        <Button onClick={handleAdd}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default App;
