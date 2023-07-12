import { Containor } from "./style";

const TodoItemBox = ({ item }) => {
  const { title, author } = item;
  return (
    <Containor>
      <p>{title}</p>
      <p>{author}</p>
    </Containor>
  );
};

export default TodoItemBox;
