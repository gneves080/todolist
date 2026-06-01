import React from "react";
import { useTodos } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodos();

  console.log("Renderizou:", todo.text);

  return (
    <li>
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => removeTodo(todo.id)}>X</button>
    </li>
  );
}

export default React.memo(TodoItem);

<span
  className={todo.completed ? "completed" : ""}
  onClick={() => toggleTodo(todo.id)}
>
  {todo.text}
</span>