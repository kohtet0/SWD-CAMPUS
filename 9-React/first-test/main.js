import React from "react";
import "./style.css";

import ReactDom from "react-dom/client";

const rootElement = document.querySelector("#root");

const root = ReactDom.createRoot(rootElement);

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

const App = () => {
  return React.createElement(
    "div",
    {
      className: "p-10 border border-gray-500 m-5",
    },
    React.createElement(
      "h1",
      {
        className: `font-serif font-bold text-3xl text-blue-500 mb-5`,
      },
      "Course List"
    ),
    React.createElement(
      "ul",
      null,
      courses
        .filter(({ studentCount }) => studentCount > 0) // filter by 0 student course
        .map(({ id, title, studentCount }) =>
          React.createElement(
            "li",
            {
              key: id,
              className: `${
                studentCount === 0 ? "bg-red-200" : "bg-gray-200"
              } border-s-4 border-gray-400 mb-2 p-3 text-green-800 font-semibold`,
            },
            title
          )
        )
    )
  );
};

root.render(App());

// const heading = React.createElement("h1", null, "Hello World!");

// const para = React.createElement(
//   "p",
//   null,
//   "lorem min ga lar par nay kaung lrr srr pp lrr hello par"
// );

// root.render(heading);
// root.render(para)
