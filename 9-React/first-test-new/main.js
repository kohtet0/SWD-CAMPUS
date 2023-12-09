import React from "react";
import "./style.css";

import ReactDom from "react-dom/client";

const rootElement = document.querySelector("#root");

const root = ReactDom.createRoot(rootElement);

const courses = [
  {
    id: 1,
    title: "Web Dev Foundation",
    studentCount: 5,
  },

  {
    id: 2,
    title: "Special Web Design",
    studentCount: 0,
  },

  {
    id: 3,
    title: "Web App Development",
    studentCount: 8,
  },

  {
    id: 4,
    title: "Basic UI Design",
    studentCount: 6,
  },

  {
    id: 5,
    title: "Premium UI Design",
    studentCount: 0,
  },
];

const App = () => {
  return React.createElement(
    "div",
    { className: "p-10 border border-gray-500 m-5" },
    React.createElement(
      "h1",
      { className: "font-serif font-bold text-3xl text-blue-500 mb-5" },
      "Min Ga Lar Par"
    ),
    React.createElement(
      "ul",
      null,
      courses
        .filter((courses) => courses.studentCount > 0)
        .map(({ id, title, studentCount }) =>
          React.createElement(
            "li",
            {
              key: id,
              className: `p-2 border-s-4 border-gray-300 mb-2 ${
                studentCount === 0 ? "bg-red-200" : "bg-gray-200"
              }`,
            },
            `${studentCount} ${title}`
          )
        )
    )
  );
};

root.render(App());

// const heading = React.createElement("h1", null, "Min Ga Lar Par")

// root.render(heading)
