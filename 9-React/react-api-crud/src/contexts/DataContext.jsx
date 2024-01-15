import React, { createContext, useRef, useState } from "react";

export const dataContext = createContext(); // create context api

const DataContextProvider = ({ children }) => {
  const [openCreateDrawer, setOpenCreateDrawer] = useState(false); // for open create drawer false:close & true:open

  const [openEditDrawer, setOpenEditDrawer] = useState(false); // for open edit drawer false:close & true:open

  const [courses, setCourse] = useState(null); // for course data render state

  const [currentCourse, setCurrentCourse] = useState(); // for edit course state

  // for create drawer close | open fun
  const toggleCreateDrawer = () => {
    setOpenCreateDrawer(!openCreateDrawer); // openCreateDrawer true | false
  };

  // for edit drawer close | open fun
  const toggleEditDrawer = () => {
    setOpenEditDrawer(!openEditDrawer); // openEditDrawer true | false
  };

  // for course new create fun
  const addCourse = (newCourse) => {
    setCourse([...courses, newCourse]); // next state change with set course so [this is arr] & copy course with (... spread operator) & newCourse
  };

  // for course remove fun
  const removeCourse = (id) => {
    setCourse(courses.filter((course) => course.id != id)); // course => filter => course.id != id (id မတူရင် ပြန်မပါတော့ပါ )
  };

  // for edit course fun
  const editCourse = (newEditCourse) => {
    setCourse(courses.map((course) => {
      if (course.id === newEditCourse.id) {
        return newEditCourse
      }
      return course
    }))
  };

  return (
    <dataContext.Provider
      value={{
        openCreateDrawer,
        toggleCreateDrawer,
        openEditDrawer,
        toggleEditDrawer,
        courses,
        setCourse,
        addCourse,
        removeCourse,
        editCourse,
        currentCourse,
        setCurrentCourse,

      }}
    >
      {children} {/* this is children props */}
    </dataContext.Provider>
  );
};

export default DataContextProvider;
