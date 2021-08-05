import React from  "react";
import Todo from "./Todo";
const Del = ({delTodo, setDelTodo, setTodos, todos}) => {
    return(
        <div>
            <h3>List Del</h3>
            <ul>
                {delTodo.map((item)=>{
                    return <Todo key={item.id} todo={item} restoreTodo={delTodo} setRestoreTodo={setDelTodo} setTodos={setTodos} todos={todos}></Todo>
                })}
            </ul>
        </div>
    );
}
export default Del;