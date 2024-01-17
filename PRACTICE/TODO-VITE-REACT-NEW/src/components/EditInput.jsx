import React, { useEffect, useRef } from "react";

const EditInput = ({ el, index, editTodo, handleEditBtn }) => {
  const editInputRef = useRef();

  useEffect(() => {
    editInputRef.current.value = el;
    editInputRef.current.focus()

    editInputRef.current.addEventListener("blur", () => {
      const newEditTodo = editInputRef.current.value;
      editTodo(newEditTodo, index);
      handleEditBtn();
    });
  }, []);

  return <input ref={editInputRef} type="text" />;
};

export default EditInput;
