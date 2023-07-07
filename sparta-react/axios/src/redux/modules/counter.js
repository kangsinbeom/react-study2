import { createSlice } from "@reduxjs/toolkit";


// 액션밸류

// 액션 크리에이터

// 리듀서

// 세개를 따로따로 만들던 방식이 귀찮으니깐 createSlice()를통해서 한번에 생성함

// createSlice()
const counterSlice = createSlice({
  name: "counter",
    initialState: "",
    reducers: {
      adddNumber : (state, action) => {
        state.number = state.number + action.payload;
        // 지금 이 방식이 불변성이 지켜지는지 알아야되고 state 안에 number가 없어서 추가하는 모양새인지 알아야곘음
      },
      minusNumber : (state, action) => {
        state.number = state.number - action.payload;
      },
    },
});

export default counterSlice.reducer;
export const {adddNumber, minusNumber} = counterSlice.actions;
// 액션 크리에이터로써도 역할을 하기 때문에 이런 방식으로 export해서 다른데서 사용하면 된다
// 액션밸류조차 필요없어지는 부분임
