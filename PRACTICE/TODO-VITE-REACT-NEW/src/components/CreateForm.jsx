import React, { useContext, useRef } from "react";

const CreateForm = ({ createNewTodo }) => {
  const createRef = useRef();

  const handleCreateRef = (event) => {
    event.preventDefault();
    const createFormData = new FormData(createRef.current);
    createNewTodo(createFormData.get("new_todo"));
    createRef.current.reset();
  };

  return (
    <form ref={createRef} onSubmit={handleCreateRef}>
      <input type="text" name="new_todo" />
      <button>Add</button>
    </form>
  );
};

export default CreateForm;
