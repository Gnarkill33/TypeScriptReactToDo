import { Task } from "./types.ts";

const Item = ({
  item,
  deleteTodo,
}: {
  item: Task;
  deleteTodo: (id: string) => void;
}) => {
  console.log(item);
  return (
    <>
      <div>{item.title}</div>
      <button onClick={() => deleteTodo(item.id)}>Удалить</button>
    </>
  );
};

export default Item;
