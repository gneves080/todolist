import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoFilters from "../components/TodoFilters";

export default function Home() {
  return (
    <div>
      <h1>Todo List Avançado</h1>
      <TodoForm />
      <TodoFilters />
      <TodoList />
    </div>
  );
}

export default function Home() {
  return (
    <div className="container">
      <h1>Todo List Avançado</h1>
      <TodoForm />
      <TodoFilters />
      <TodoList />
    </div>
  );
}