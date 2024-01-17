import React, { useContext } from "react";
import List from "./List";

const ListGroup = ({ todoList, deleteTodo, editTodo }) => {
  return (
    <ul>
      {todoList.map((el, index) => {
        return (
          <List
            key={index}
            el={el}
            index={index}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </ul>
  );
};

export default ListGroup;
