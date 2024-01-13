import React, { useState } from "react";

const Counter = () => {
  return (
    <div className="flex justify-center items-center h-screen">
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

export default Counter;
