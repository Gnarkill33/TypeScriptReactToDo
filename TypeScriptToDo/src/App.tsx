import { useState, useEffect } from "react";
import Item from "./Item.tsx";
import "./App.css";

function App() {
  const initialTodos: string[] = [
    "почитать книгу",
    "сходить в зал",
    "посмотреть видео",
    "изучить доку",
  ];

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos") ?? []) || initialTodos
  );

  const addTodoHandler = (event: MouseEvent) => {
    setTodos([...todos, event.target.value]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      {todos.map((item, index) => {
        return <Item key={index} item={item} />;
      })}
      <form>
        <input type='text' placeholder='Ввести задачу' />
        <button onClick={addTodoHandler} type='submit'>
          Добавить
        </button>
      </form>
      {todos.length >= 4 && <div>Всего задач: {todos.length}</div>}
    </div>
  );
}

export default App;
