import React from "react";
import {Redirect} from "react-router-dom"
const Edit = ({ todo, todos, setTodos, setTodo }) => {
  const changeHanlder = (e) => {
   
      let newState = Object.assign({}, todo);
      newState.text = e.target.value;
      setTodo(newState);
   
  };
  const edit = () => {
    setTodos(todos.map((item)=>{
      if(item.id === todo.id){
        item = todo
      }
      return item;
    }));
    alert("ok!!")
    
  }

  return (
    <div>
      <h3>Edit</h3>
      <input type="text" value={todo.text} onChange={changeHanlder}></input>
      <button onClick={edit}>edit</button>
    </div>
  );
};

export default Edit;
