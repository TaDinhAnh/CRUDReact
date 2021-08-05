import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import Completed from "./components/Completed";
import Del from "./components/Del";
import Edit from "./components/Edit";

function App() {
  /* eslint-disable no-use-before-define */

  const [todos, setTodos] = useState([
    { text: "todo1", completed: false, id: Math.random() },
    { text: "todo2", completed: false, id: Math.random() },
    { text: "todo3", completed: false, id: Math.random() },
  ]);
  const [inputText, setInputText] = useState("");
  const [completedTodo, setCompletedTodo] = useState([]);
  const [delTodo, setDelTodo] = useState([]);
  const [todo, setTodo]= useState({});
  useEffect(()=>{
    console.log(todo);
  },[todo])
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/completed">Completed</Link>
          </li>
          <li>
            <Link to="/del">Del</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home
              setInputText={setInputText}
              inputText={inputText}
              todos={todos}
              setTodos={setTodos}
              setCompletedTodo={setCompletedTodo}
              setDelTodo={setDelTodo}
              completedTodo={completedTodo}
              delTodo={delTodo}
              setTodo = {setTodo}
            ></Home>
          </Route>
          <Route path="/completed">
            <Completed
              completedTodo={completedTodo}
              setCompletedTodo={setCompletedTodo}
              setTodos={setTodos}
              todos={todos}
            ></Completed>
          </Route>
          <Route path="/del">
            <Del
              delTodo={delTodo}
              setDelTodo={setDelTodo}
              setTodos={setTodos}
              todos={todos}
            ></Del>
          </Route>
          <Route path="/edit">
           <Edit todo={todo} setTodos={setTodos} todos={todos} setTodo={setTodo}></Edit>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

