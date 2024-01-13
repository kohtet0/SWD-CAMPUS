import React, { createContext, useRef, useState } from "react";

export const dataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [openCreateDrawer, setOpenCreateDrawer] = useState(true);
  const [openEditDrawer, setOpenEditDrawer] = useState(false);
  const [courses, setCourse] = useState([]);
  const createRef = useRef();

  const toggleCreateDrawer = () => {
    setOpenCreateDrawer(!openCreateDrawer);
  };

  const toggleEditDrawer = () => {
    setOpenEditDrawer(!openEditDrawer);
  };

  const addCourse = (newCourse) => {
    setCourse([...courses, newCourse]);
  };

  const removeCourse = (id) => {
    courses.filter((course) => course.id != id);
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
        createRef,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;
