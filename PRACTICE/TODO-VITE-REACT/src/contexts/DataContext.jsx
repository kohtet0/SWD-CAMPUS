import React, { createContext, useState } from "react";

export const dataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  const addNewTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  };

  const delTodo = (index) => {
    setTodo(
      todo.filter((index) => {
        index != index;
      })
    );
  };

  const editTodo = (newEditTodo, i) => {
    setTodo(
      todo.map((el, index) => {
        if (index === i) {
          console.log(el, i);
          console.log(newEditTodo, i);
          return newEditTodo;
        }
        return el;
      })
    );
  };

  console.log(todo);

  return (
    <dataContext.Provider value={{ todo, addNewTodo, delTodo, editTodo }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;
