import React from "react";
import { Link } from "react-router-dom";

const Home = ({
  inputText,
  setTodos,
  setInputText,
  todos,
  setCompletedTodo,
  setDelTodo,
  completedTodo,
  delTodo,
  setTodo
}) => {
   
  /* eslint-disable array-callback-return */
  const delHandler = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          setDelTodo([...delTodo, item]);
        }
        return;
      })
    );
    setTodos(todos.filter((item) => item.id !== id));
  };

  const completedHandler = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.completed = true;
          setCompletedTodo([...completedTodo, item]);
        }
        return item;
      })
    );
    setTodos(todos.filter((el) => el.id !== id));
  };

  const inputTextHandle = (e) => {
    setInputText(e.target.value);
  };

  const submidTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() },
    ]);
    setInputText("");
  };

  const getTodo = (id) => {
    todos.map((item)=>{
      if(item.id === id){
        setTodo(item);
        return;
      }
    })
  }
  return (
    <div>
      <form>
        <input type="text" value={inputText} onChange={inputTextHandle}></input>
        <button onClick={submidTodo} type="submit">
          {" "}
          submit
        </button>
      </form>

      <ul>
        {todos.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <li className={item.completed ? "completed" : ""}>
                  {item.text}
                </li>
                <button onClick={completedHandler.bind(this,item.id)}>
                  completed
                </button>
                <button onClick={delHandler.bind(this,item.id)}>
                  del
                </button>
                <button>
                   <Link to="/edit" onClick={getTodo.bind(this,item.id)} >edit</Link>
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
