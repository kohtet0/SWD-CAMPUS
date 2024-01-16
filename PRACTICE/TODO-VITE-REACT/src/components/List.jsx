import React, { useContext, useState } from "react";
import { dataContext } from "../contexts/DataContext";
import EditInput from "./EditInput";

const List = ({ el, index }) => {
  const { delTodo } = useContext(dataContext);
  const [edit, setEdit] = useState(false);
  const handleDelBtn = () => {
    delTodo(index);
  };

  const handleEditBtn = () => {
    setEdit(!edit);
  };

  return (
    <>
      {!edit && (
        <li>
          {el}
          <button onClick={handleEditBtn} type="submit">
            Edit
          </button>
          <button onClick={handleDelBtn} type="submit">
            Del
          </button>
        </li>
      )}

      {edit && <EditInput el={el} index={index} edited={handleEditBtn} />}
    </>
  );
};

export default List;
