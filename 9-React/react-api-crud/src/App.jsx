import React, { useContext } from "react";
import Header from "./components/Header";
import CreateGroup from "./components/CreateGroup";
import CourseTable from "./components/CourseTable";
import CreateFormDrawer from "./components/CreateFormDrawer";
import EditFormDrawer from "./components/EditFormDrawer";
import { dataContext } from "./contexts/DataContext";

const App = () => {
  const { openEditDrawer } = useContext(dataContext);
  return (
    <>
      <Header />
      <CreateGroup />
      <CourseTable />
      <CreateFormDrawer />
      {openEditDrawer && <EditFormDrawer />}
    </>
  );
};

export default App;
