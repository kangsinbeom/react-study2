import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getTodos } from "../redux/modules/todos";
import { useSelector } from "react-redux";
function TodoList() {
  const dispatch = useDispatch();
  const { todos, isLoading, error } = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(__getTodos());
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

export default TodoList;
// 미들웨어를 통해서 옵셔널체이닝을 안쓰고도 비동기처리가 잘 작동되게 할 수 있다
