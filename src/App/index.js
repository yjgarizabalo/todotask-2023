import React from "react";
import { AppUi } from "./AppUi";

// const defaulTodos = [
//   { text: "Hombre exitoso", completed: true },
//   { text: "Hombre del exito", completed: false },
//   { text: "Hombre busca el exito", completed: false }
// ];

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue)

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 1000)
  });

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  }

  return {
    item,
    saveItem,
    loading,
    error
  };
}

function App() {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newItem = [...todos];
    todos[todoIndex].completed = true;
    saveTodos(newItem);
  }

  const deletTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newItem = [...todos];
    newItem.splice(todoIndex, 1);
    saveTodos(newItem);
  };

  return (
    <AppUi
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deletTodo={deletTodo}
    />
  );
}

export default App;
