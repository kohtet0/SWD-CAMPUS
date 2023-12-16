import React from "react";
import Heading from "./components/Heading";
import CourseGroup from "./components/CourseGroup";

const App = () => {
  return (
    <div className=" m-5 p-10 border border-gray-500">
      <Heading />
      <CourseGroup />
    </div>
  );
};

export default App;
