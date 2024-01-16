import React, { useContext } from "react";
import List from "./List";
import { dataContext } from "../contexts/DataContext";

const ListGroup = () => {
  const { todo } = useContext(dataContext);
  return (
    <ul>
      {todo.map((el, index) => (
        <List key={index} index={index} el={el}/>
      ))}
    </ul>
  );
};

export default ListGroup;
