import React, { useState } from "react";
import Header from "./components/Header";
import CreateForm from "./components/CreateForm";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const createNewTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = (el, indexNo) => {
    setTodoList(
      todoList.filter((el, index) => {
        return index != indexNo;
      })
    );
  };

  const editTodo = (newEditTodo, indexNo) => {
    setTodoList(
      todoList.map((el, index) => {
        if (index === indexNo) {
          return newEditTodo;
        }
        return el;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateForm createNewTodo={createNewTodo} />
      <ListGroup
        todoList={todoList}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </>
  );
};

export default App;
