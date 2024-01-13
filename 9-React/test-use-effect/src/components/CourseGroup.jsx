import React, { useEffect, useState } from "react";
import Course from "./Course";

const CourseGroup = () => {
  const [courses, setCourse] = useState();

  useEffect(() => {
    console.log("u mounted");

    fetch("http://localhost:5173/api/courses")
      .then((response) => response.json())
      .then((json) => setCourse([json()]));

    console.log(courses);
    return () => {
      console.log("u unmounted");
    };
  }, []);
  return <div></div>;
};

export default CourseGroup;
