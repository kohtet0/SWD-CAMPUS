import React from "react";

const App = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Foundation",
      studentCount: 0,
    },

    {
      id: 2,
      title: "Special Web Design",
      studentCount: 5,
    },

    {
      id: 3,
      title: "Web App Development",
      studentCount: 0,
    },

    {
      id: 4,
      title: "Basic UI Design",
      studentCount: 8,
    },
  ];

  const title = "Course List";

  return (
    <div className="p-10 border border-gray-500 m-5">
      <h1 className=" font-serif font-bold text-3xl mb-5 text-blue-500">
        {title}
      </h1>
      <ul>
        {courses.map(({ id, title, studentCount }) => (
          <li
            key={id}
            className={`border-s-4 border-gray-300 p-2 mb-2 ${
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
