import React, { useReducer } from "react";
import { Button } from "./components/ui/button";

const reducer = (store, action) => {
  const condition = action.type;
  if (condition === "increment") {
    return (store += 1);
  } else if (condition === "decrease") {
    if (store > 0) {
      return (store -= 1);
    } else {
      return store;
    }
  } else {
    return store;
  }
};

const App = () => {
  const [state, dispatcher] = useReducer(reducer, 0);

  const handleAddBtn = () => {
    dispatcher({ type: "increment" });
  };

  const handleRemoveBtn = () => {
    dispatcher({ type: "decrease" });
  };

  return (
    <div className="container">
      <h1 className=" text-2xl font-bold mb-5">Add & Remove</h1>
      <div className="flex items-center gap-5">
        <Button onClick={handleRemoveBtn}>
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
        <h2 className=" text-xl">{state}</h2>
        <Button onClick={handleAddBtn}>
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
