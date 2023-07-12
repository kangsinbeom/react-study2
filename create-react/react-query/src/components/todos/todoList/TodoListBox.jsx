import TodoItemBox from "../todoItem/TodoItemBox";
import { Containor } from "./style";
const TodoListBox = ({ data }) => {
  return (
    <Containor>
      {data?.map((item) => {
        return <TodoItemBox key={item.id} item={item} />;
      })}
    </Containor>
  );
};

export default TodoListBox;
