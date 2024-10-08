import { useState, useEffect, useRef } from "react";
import { Task } from "./types.ts";
import Item from "./Item.tsx";
import "./App.css";

function App() {
  const initialTodos: Task[] = [
    { id: "0", title: "почитать книгу" },
    { id: "1", title: "сходить в зал" },
    { id: "2", title: "посмотреть видео" },
    { id: "3", title: "изучить доку" },
    { id: "4", title: "закончить уборку" },
  ];

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos") ?? JSON.stringify(initialTodos))
  );

  const inputRef = useRef<any>(null);

  const addTodoHandler = () => {
    setTodos([...todos, inputRef.current]);
  };

  const deleteTodoHandler = (id: string) => {
    const remainingTodo = todos.filter((item: Task) => item.id !== id);
    setTodos(remainingTodo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      {todos.map((item: Task) => {
        return (
          <Item key={item.id} item={item} deleteTodo={deleteTodoHandler} />
        );
      })}
      <form>
        <input
          ref={inputRef}
          onChange={(event) =>
            ((inputRef.current as unknown as string) = event.target.value)
          }
          type='text'
          placeholder='Ввести задачу'
        />
        <button onClick={addTodoHandler} type='submit'>
          Добавить
        </button>
      </form>
      {todos.length >= 4 && <div>Всего задач: {todos.length}</div>}
    </div>
  );
}

export default App;
