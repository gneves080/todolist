import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import { useMemo } from "react";

export default function TodoList() {
  const { todos, filter } = useTodos();

  const filteredTodos = useMemo(() => {
    console.log("Filtrando...");
    
    switch (filter) {
      case "completed":
        return todos.filter(t => t.completed);
      case "pending":
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  return (
    <ul>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}