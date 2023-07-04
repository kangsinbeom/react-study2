import React from "react";
import { useSelector } from "react-redux";

function Counter() {
  const data = useSelector((data) => data.counter);
  console.log(data);

  return <div></div>;
}

export default Counter;
