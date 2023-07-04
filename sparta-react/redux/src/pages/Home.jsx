import React from "react";
import Counter from "../components/counter/Counter";
import { useNavigate } from "react-router-dom";

function Home() {
  const nevigate = useNavigate();

  return (
    <div>
      <Counter />
      <br />
      <button onClick={() => nevigate("/work")}> work로 이동</button>
    </div>
  );
}

export default Home;

// useNavigate 를 써보자
// 이거 쓸 때에도 onclick에 콜백함수를 넣어야한다는 것을 기억하자
