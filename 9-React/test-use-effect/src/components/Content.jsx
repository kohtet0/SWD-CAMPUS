import React, { useEffect, useState } from "react";
import Counter from "./Counter";

const Content = () => {
  const [count, setCount] = useState(0);

    console.log(`update ${count}`);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    count > 0 && setCount(count - 1);
  };

  useEffect(() => {
    // effect logic

    console.log("u mounted");

    return () => {
      // clean up function

      console.log("u unmounted");
    };
  }, [count]);
  return (
    <div className="bg-white p-4 rounded shadow-md">
      {/* Content to be shown/hidden */}
      <p>This is the content you can hide/show.</p>

        <div className="bg-gray-200 rounded-md p-4">
          <h1 className="text-4xl font-bold mb-4">Counter</h1>
          <div className="flex items-center justify-center space-x-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              onClick={decrement}
            >
              -
            </button>
            <p className="text-2xl">{count}</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              onClick={increment}
            >
              +
            </button>
          </div>
        </div>
      </div>
  );
};

export default Content;
