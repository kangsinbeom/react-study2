import { createSlice } from "@reduxjs/toolkit"


// 이름이 가지는게 어떤거였지? 의미가?? 이게 store에 들어가나?
// 이거 잘못불러왔네 sliceReducer가 아니구나 createSlice import 해오고
const initialState = {
  number : 0
}


const slicedCounter = createSlice({
  name : "counter",
  initialState,
  // initialState가 비어있다고 나오는데 어떻게 해결할까?
  reducers : {
    addNumber : (state, action) => {
      state.number = state.number + action.payload
    },
    minusNumber : (state, action) => {
      state.number = state.number - action.payload
    }
  }
})
console.log(slicedCounter);
// counter의 객체모습도 보고싶은데 보니까 이해가 좀 되네
export const { addNumber, minusNumber } = slicedCounter.actions
export default slicedCounter.reducer;

// create가 인자로 받는 객체의 필수요소들을 알아야지
// reducer안에 action creator 생성을 어케 하더라??
//  export 할때 이렇게 해도 counter로 들어가는 이유는??
// naming이 counterSlice가 더 많이 쓰이나보네
// 리듀서 함수 내에서는 초기값을 0으로 가질 수 없다.
// immer이 사용되고있으니깐 return은 못쓴다 이런느낌인데 불변성을 과도하게 유지하면 안된다

