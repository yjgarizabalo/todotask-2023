import React from "react";
// import './App.css';

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";

const todos = [
  { text: "Hombre exitoso", completed: true },
  { text: "Hombre del exito", completed: false },
  { text: "Hombre busca el exito", completed: false }
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {
          todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
