// 액션함수
const INCREASEMENT = "INCREASEMENT";
const DECREASEMENT = "DECREASEMENT";

// 액션 크리에이트
export const increase = (payload) => ({ type: INCREASEMENT, payload });
export const decrease = (payload) => ({ type: DECREASEMENT, payload });



// 초기상태값
const initalState = {
  number : 0,
};


// 리듀서함수
const counter = (state = initalState, action) => {
  switch (action.type) {
    case INCREASEMENT:
      return {...state, number : state.number + action.payload };
    case DECREASEMENT:
      return  {...state, number : state.number - action.payload };
    default:
      return state;
  }
}

export default counter;

// 숫자를 더하는 방법을 까먹었는데 불변성을 지키면서 숫자 1을 더하는 방법
// 왜 위에 방식은 불변성을 지키지 못했는가? => 불변성을 못지킨게 아니고 액션의 타입이 달랐음
// 키와 밸류가 같은 것은 하나로 생략할 수 있기에 객체 안에 하나만 적힌게 있는 것을 기억하자 