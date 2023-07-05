import React, { useEffect, useState } from "react";
import api from "../axios/api";
function TodoAxios() {
  const [todos, setTodos] = useState(null);
  const [updateValue, setUpdateValue] = useState({
    id: "",
    title: "",
  });
  const [inputValue, setInputValue] = useState({
    title: "",
    content: "",
  });

  // 조회함수
  const fetchTodos = async () => {
    const { data } = await api.get("/todos");
    setTodos(data);
  };

  // 추가함수
  const onSubmitHnadler = async () => {
    await api.post(`/todos`, inputValue);
    fetchTodos();
    // 여기서 setTodos([...todos, inputValue]) 로 했었는데 이게 에러가 뜬다 그래서 걍 fetchTodo() 로 빠꿈
    setInputValue({
      title: "",
      content: "",
    });
  };

  // 삭제함수
  const onDeleteHandler = async (id) => {
    await api.delete(`/todos/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 수정함수
  const onUpdateHandler = async () => {
    await api.patch(`/todos/${updateValue.id}`, {
      title: updateValue.title,
    });
    fetchTodos();
  };

  // 최초 마운트될때 db로부터 값을 가져온다
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <div>
        {/* 수정영역 */}
        <input
          placeholder="id"
          type="text"
          value={updateValue.id}
          onChange={(e) => {
            setUpdateValue({
              ...updateValue,
              id: e.target.value,
            });
          }}
        />
        <input
          placeholder="title"
          type="text"
          value={updateValue.title}
          onChange={(e) => {
            setUpdateValue({
              ...updateValue,
              title: e.target.value,
            });
          }}
        />
        <button onClick={() => onUpdateHandler()}>update</button>
      </div>
      <div>
        {/*인풋영역 */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitHnadler();
          }}
        >
          <input
            type="text"
            value={inputValue.title}
            onChange={(e) => {
              setInputValue({
                ...inputValue,
                title: e.target.value,
              });
            }}
          />
          <input
            type="text"
            value={inputValue.content}
            onChange={(e) => {
              setInputValue({
                ...inputValue,
                content: e.target.value,
              });
            }}
          />
          <button>add</button>
        </form>
      </div>
      <div>
        {/* 데이터 영역 */}
        {todos?.map((todo) => (
          <div key={todo.id}>
            {todo.id} : {todo.title}
            {todo.content}
            &nbsp;
            <button onClick={() => onDeleteHandler(todo.id)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoAxios;
// 비동기 함수가 redering보다 늦게 실행이 된다는 것을 기억해야한다.
// 그래서 ?. 옵셔널 체이닝이 꼭 필요하다

// 데이터를 추가할 때 가장 쉽게 생각할 수 있는 <form>
