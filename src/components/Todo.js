/* eslint-disable array-callback-return */
import React from "react";

const Todo = ({ restoreTodo, setTodos, todos, setRestoreTodo, todo }) => {
  const restoreHandler = () => {
    restoreTodo.map((item) => {
      if (item.id === todo.id) {
        if (window.location.pathname === "/completed") {
          item.completed = false;
        }
        setTodos([...todos, item]);
      }
      return;
    });
    setRestoreTodo(restoreTodo.filter((el) => el.id !== todo.id));
  };

  const Completed = () => {
    if (window.location.pathname === "/del") {
      return (
        <>
          <label>{todo.completed ? "unCompleted" : "completed"}</label>
          <button onClick={changStatus}>
            {todo.completed ? "completed" : "uncompleted"}
          </button>
        </>
      );
    }
    return null;
  };

  const changStatus = () => {
    setRestoreTodo(
      restoreTodo.map((item) => {
        if (item.id === todo.id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };

  return (
    <div>
      <li>{todo.text}</li>
      <button onClick={restoreHandler}>restore</button>
      <Completed></Completed>
    </div>
  );
};
export default Todo;
