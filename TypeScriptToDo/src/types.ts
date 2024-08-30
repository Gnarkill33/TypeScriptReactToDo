export default interface Task {
  id: string;
  title: string;
}

export default interface deleteTodoProps {
  deleteTodo: (id: string) => void;
}
