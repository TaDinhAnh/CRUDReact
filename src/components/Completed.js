import React from "react";
import Todo from "./Todo";

const Completed = ({completedTodo,setCompletedTodo,setTodos, todos}) =>{
    return(
      <div>
          <h3>List Completed</h3>
          <ul>
              {completedTodo.map((item)=>{
                  return <Todo key={item.id} todo={item} setRestoreTodo={setCompletedTodo} restoreTodo={completedTodo} setTodos={setTodos} todos={todos}></Todo>
              })}
          </ul>
      </div>
    );
}
export default Completed;