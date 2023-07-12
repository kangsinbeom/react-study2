import TodoItemBox from "../todoItem/TodoItemBox";
const TodoListBox = ({ data }) => {
  return (
    <>
      {data?.map((item) => {
        return <TodoItemBox key={item.id} item={item} />;
      })}
    </>
  );
};

export default TodoListBox;
