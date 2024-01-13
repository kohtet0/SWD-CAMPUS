import React from "react";
import Header from "./components/Header";
import CreateGroup from "./components/CreateGroup";
import CourseTable from "./components/CourseTable";
import CreateFormDrawer from "./components/CreateFormDrawer";
import EditFormDrawer from "./components/EditFormDrawer";

const App = () => {
  return (
    <>
      <Header />
      <CreateGroup />
      <CourseTable />
      <CreateFormDrawer />
      <EditFormDrawer />
    </>
  );
};

export default App;
