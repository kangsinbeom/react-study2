// 액션함수
const INCREASEMENT = "INCREASEMENT";
const DECREASEMENT = "DECREASEMENT";

// 액션 크리에이트
export const increase = () => ({ type: INCREASEMENT });
export const decrease = () => ({ type: DECREASEMENT });



// 초기상태값
const initalState = {
  number : 0,
};


// 리듀서함수
const counter = (state = initalState, action) => {
  switch (action.type) {
    case INCREASEMENT:
      return {...state, number : state.number + 1 };
    case DECREASEMENT:
      return  {...state, number : state.number - 1 };
    default:
      return state;
  }
}

export default counter;

// 숫자를 더하는 방법을 까먹었는데 불변성을 지키면서 숫자 1을 더하는 방법
// 왜 위에 방식은 불변성을 지키지 못했는가? => 불변성을 못지킨게 아니고 액션의 타입이 달랐음