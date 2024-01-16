import React, { useContext, useEffect, useRef } from "react";
import { dataContext } from "../contexts/DataContext";

const EditInput = ({ el, index, edited }) => {
  const { editTodo } = useContext(dataContext);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = el;
    inputRef.current.focus();
    inputRef.current.addEventListener("blur", () => {
      const newEditTodo = inputRef.current.value;
      editTodo(newEditTodo, index);
      edited();
    });
  }, []);
  return <input ref={inputRef} type="text" />;
};

export default EditInput;
