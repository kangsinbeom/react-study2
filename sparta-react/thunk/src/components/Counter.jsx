import React, { useState } from "react";
import styled from "styled-components";
import { __addNumber, __minusNumber } from "../redux/modules/counter";
import { useDispatch, useSelector } from "react-redux";
function Counter() {
  const [number, setNumber] = useState("");
  // addNumber랑 minusNumber를 사용할 때 dispatch 써야할 것 같은데
  const dispatch = useDispatch();
  // provider 설정을 안했었구만
  const savedValue = useSelector((state) => state.counter.number);
  return (
    <StyledCounter>
      {savedValue}
      <br></br>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      {/* 왜 디스패치를 역기서도 쓰고 청크에서도 쓰게 되는가? 이 디스패치는 counter로 보내고 청크에 있는거는 다시 reducer로 보내니깐 그렇게 되는구나 */}
      <button onClick={() => dispatch(__addNumber(+number))}>add</button>
      <button onClick={() => dispatch(__minusNumber(+number))}>minus</button>
    </StyledCounter>
  );
}

export default Counter;

const StyledCounter = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 200px;
  padding: 20px;
`;
