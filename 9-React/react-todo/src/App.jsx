import React from "react";
import Heading from "./components/Heading";
import Form from "./components/Form";
import Status from "./components/Status";
import ListGroup from "./components/ListGroup";

const App = () => {
  return (
    <div className="max-w-xs sm:max-w-md w-full">
      <Heading />
      <Form />
      <Status />
      <ListGroup />
    </div>
  );
};

export default App;
