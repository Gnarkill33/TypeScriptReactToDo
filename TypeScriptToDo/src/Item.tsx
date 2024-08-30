import Task from "./types.ts";
import deleteTodoProps from "./types.ts";

const Item = (
  { item }: { item: Task },
  { id }: { id: string },
  { deleteTodo = () => {} }: deleteTodoProps
) => {
  return (
    <>
      <div>{item}</div>
      <button onClick={() => deleteTodo(id)}>Удалить</button>
    </>
  );
};

export default Item;
