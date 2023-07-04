// 액션객체
const INCREASEMENT = "counter/INCREASEMENT"
const DECREASEMENT = "counter/DECREASEMENT"

// 액션함수




// 초기상태값
const initalState = {
  number : 0,
};


// 리듀서함수
const counter = (state = initalState, action) => {
  switch (action.type) {
    case INCREASEMENT:
      return {
      ...state,
        count: state.count + 1,
      };
    case DECREASEMENT:
      return {
      ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

export default counter;