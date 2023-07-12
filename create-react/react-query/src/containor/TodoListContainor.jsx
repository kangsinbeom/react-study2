import TodoListBox from "../components/todos/todoList/TodoListBox";
import { useQuery } from "react-query";
import { getTodos } from "../apis/api";

const TodoListContainor = () => {
  const { isLoading, isError, error, data } = useQuery("todos", getTodos);
  if (isLoading) {
    <p>Loading..</p>;
  }
  if (isError) {
    <p>{error}</p>;
  }

  return <TodoListBox data={data} />;
};

export default TodoListContainor;
