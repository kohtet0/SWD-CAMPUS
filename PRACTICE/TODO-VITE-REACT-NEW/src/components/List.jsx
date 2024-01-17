import React, { useContext, useState } from "react";
import EditInput from "./EditInput";

const List = ({ el, index, deleteTodo, editTodo }) => {
  const [edit, setEdit] = useState(false);

  const handleDelBtn = () => {
    deleteTodo(el, index);
  };

  const handleEditBtn = () => {
    setEdit(!edit);
  };

  return (
    <>
      {!edit ? (
        <li>
          {el} <button onClick={handleEditBtn}>Edit</button>
          <button onClick={handleDelBtn}>Del</button>
        </li>
      ) : (
        <EditInput el={el} index={index} editTodo={editTodo} handleEditBtn={handleEditBtn} />
      )}
    </>
  );
};

export default List;
