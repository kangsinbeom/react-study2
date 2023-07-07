import React, { useState } from "react";
import styled from "styled-components";
import { addNumber, minusNumber } from "../redux/modules/counter";
import { useDispatch, useSelector } from "react-redux";
function Counter() {
  const [number, setNumber] = useState(0);
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
      <button onClick={() => dispatch(addNumber(+number))}>add</button>
      <button onClick={() => dispatch(minusNumber(+number))}>minus</button>
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
