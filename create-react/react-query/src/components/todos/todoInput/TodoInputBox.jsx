// import { useInput } from "../../../hooks/useInput";

import { useState } from "react";
import { addTodo } from "../../../apis/api";
import { QueryClient, useMutation, useQueryClient } from "react-query";
const TodoInputBox = () => {
  const [todo, setTodo] = useState({
    title: "",
    author: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const newTodo = {
      ...todo,
      [name]: value,
    };
    setTodo(newTodo);
  };
  // 여기부분이 틀렸었네
  const queryClient = useQueryClient();
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(todo);
        // mutation 쓰는방법
        mutation.mutate(todo);
        setTodo({
          title: "",
          author: "",
        });
      }}
    >
      <input
        name="title"
        type="text"
        value={todo.title}
        onChange={(e) => onChangeHandler(e)}
      />
      <input
        name="author"
        type="text"
        value={todo.author}
        onChange={(e) => onChangeHandler(e)}
      />
      <button>send</button>
    </form>
  );
};

export default TodoInputBox;
