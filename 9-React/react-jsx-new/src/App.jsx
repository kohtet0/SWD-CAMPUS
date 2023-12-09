import React from "react";

const App = () => {
  const courses = [
    {
      id: 1,
      title: "SWD",
      studentCount: 5,
    },

    {
      id: 2,
      title: "WDF",
      studentCount: 0,
    },

    {
      id: 3,
      title: "WAD",
      studentCount: 2,
    },

    {
      id: 4,
      title: "BUD",
      studentCount: 15,
    },

    {
      id: 5,
      title: "PUD",
      studentCount: 0,
    },
  ];

  const title = "Course List";

  return (
    <div className=" m-5 p-10 border border-gray-500">
      <h1 className=" font-serif font-bold text-3xl text-blue-500 mb-5">
        {title}
      </h1>
      <ul>
        {courses.map(({ id, title, studentCount }) => (
          <li
            key={id}
            className={`p-2 border-s-4 border-gray-300 mb-2 hover:scale-105 duration-300 ${
              studentCount === 0 ? "bg-red-200" : "bg-gray-200"
            }`}
          >
            {studentCount} {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
