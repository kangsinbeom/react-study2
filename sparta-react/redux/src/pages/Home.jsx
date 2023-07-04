import React from "react";
import Counter from "../components/counter/Counter";
import { useNavigate } from "react-router-dom";

function Home() {
  const nevigate = useNavigate();

  return (
    <div>
      <Counter />
      <br />
      <button> work로 이동</button>
    </div>
  );
}

export default Home;

// useNavigate 를 써보자
