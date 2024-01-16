import React, { useContext, useRef } from "react";
import { dataContext } from "../contexts/DataContext";

const Form = () => {
  const { addNewTodo } = useContext(dataContext);
  const formRef = useRef();

  const createTodo = (event) => {
    event.preventDefault();
    const todoData = new FormData(formRef.current);
    addNewTodo(todoData.get("todo_name"));
    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={createTodo}>
      <input type="text" name="todo_name" />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
