import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) {
      setCount(() => count - 1);
    }
  };

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="border border-red-500 p-10 font-mono">
      <h1 className="text-3xl mb-3 font-bold">Counter</h1>
      <p className=" mb-2">number : {count}</p>
      <div className="">
        <button
          onClick={decrement}
          className=" border bg-red-300 text-red-950 active:scale-90 duration-200 active:bg-red-400 hover:bg-red-200 py-2 px-3 rounded-full"
        >
          Sub (-)
        </button>
        <button
          onClick={increment}
          className=" border bg-red-300 text-red-950 active:scale-90 duration-200 active:bg-red-400 hover:bg-red-200 py-2 px-3 rounded-full"
        >
          Add (+)
        </button>
      </div>
    </div>
  );
};

export default Counter;
