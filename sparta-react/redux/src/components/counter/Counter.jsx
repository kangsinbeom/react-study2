import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { decrease, increase } from "../../redux/modules/counter";

function Counter() {
  const data = useSelector((data) => data.counter);
  const dispatch = useDispatch();

  return (
    <StyledCounter>
      <h1>Counter : {data.number}</h1>
      <button onClick={() => dispatch(increase())}>1더하기</button>
      <button onClick={() => dispatch(decrease())}>1빼기</button>
    </StyledCounter>
  );
}

export default Counter;

const StyledCounter = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 300px;
`;

//  useSelector를 사용했을 때 객체형태를 그대로 사용하려고 하면 Objects are not valid as a React child 이와 같은 에러가 난다.
// 해결방법 : 객체 형태로 사용하지 말고 객체 안의 값을 뽑아서 사용하자 ex) {data} X , {data.number} O
// 더하고 빼는 onCLick에 호출형태를 넣으면 계속해서 실행이 되는 모습을 보인다 그렇기에 함수형태로 넣어줘야한다(아제 이해한것 같다)
