import React, { useState } from "react";
import Heading from "./components/Heading";
import Form from "./components/Form";
import Status from "./components/Status";
import ListGroup from "./components/ListGroup";
import Counter from "./Counter";
import Input from "./Input";
import Check from "./Check";
import AccordionGroup from "./AccordionGroup";

const App = () => {
  const [task, setTask] = useState([
    {
      id: 1,
      job: "complete homework",
      isDone: true,
    },

    {
      id: 2,
      job: "complete workout",
      isDone: false,
    },

    {
      id: 3,
      job: "go to school",
      isDone: false,
    },

    {
      id: 4,
      job: "meet with friend & girlfriend",
      isDone: false,
    },

    {
      id: 5,
      job: "house keeping",
      isDone: true,
    },
  ]);

  const addTask = (newTask) => {
    setTask(newTask);
  };

  return (
    <div className="max-w-xs sm:max-w-md w-full">
      <Heading />
      <Form addTask={addTask} />
      <Status task={task} />
      <ListGroup task={task} />

      {/* <Counter /> */}
      {/* <Input /> */}
      {/* <Check /> */}
      {/* <AccordionGroup /> */}
    </div>
  );
};

export default App;
