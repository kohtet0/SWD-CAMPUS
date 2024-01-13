import React, { useState } from "react";
import Content from "./Content";

const HideShowComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 rounded-md p-4">
        <h1 className="text-4xl font-bold mb-4">Hide/Show Component</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mb-4"
          onClick={toggleVisibility}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <Content />}
      </div>
    </div>
  );
};

export default HideShowComponent;
