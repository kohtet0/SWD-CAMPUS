import React from "react";
import Course from "./Course";

const CourseGroup = () => {
  const courses = [
    {
      id: 1,
      title: "Swd",
      stCount: 5,
    },

    {
      id: 2,
      title: "wdf",
      stCount: 0,
    },

    {
      id: 3,
      title: "wad",
      stCount: 15,
    },

    {
      id: 4,
      title: "bud",
      stCount: 1,
    },

    {
      id: 5,
      title: "pud",
      stCount: 0,
    },
  ];

  return (
    <ul>
      {courses.map(({ id, title, stCount }) => (
        <Course name={title} st={stCount} key={id} />
      ))}
    </ul>
  );
};

export default CourseGroup;
