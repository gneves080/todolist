import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("all");

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        removeTodo,
        filter,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}