import React from "react";

const Course = ({ name, st }) => {
  return (
    st > 0 && (
      <li
        className={`border-s-4 border-gray-300 p-3 mb-3 hover:scale-105 duration-100 ${
          st === 0 ? "bg-red-200" : "bg-gray-200"
        }`}
      >
        {st} {name}
      </li>
    )
  );
};

export default Course;
