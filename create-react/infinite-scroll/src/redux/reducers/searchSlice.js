import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category : 1,
  data : [],
  preData : [],
  hasMorePost : true,
  picType : "jpg",
  page: 1,
}

const searchSlice = createSlice({
  name  : "search",
  initialState,
    reducers: {
      // 진짜 picType 만 바꾸는 action create
      changePicType: (state, action) => {
        state.picType = action.payload
        state.data = []
        state.preData = []
      },
      // 니가 뭘 가지고 있든 액션페이로드를 더해주겠다
      // 불변성이 유지되는것같은데 상관은 없지 근데 return은 왜 안들어가도 되는지는 궁금
      searchResult : (state, action) => {
        state.data = state.data.concat(action.payload)
        ++state.page
      },
      addPreData : (state, action) => {
        state.preData = action.payload
        state.hasMorePost = true 
        // 이건 굳이 왜 하는거지 누가 false 만드는지를 봐야겠네
      },
      concatPreData : (state, action) => {
        state.data = state.data.concat(state.preData)
        state.preData = []
        state.hasMorePost = false
      },
      ResetSearch: (state, action) => {
        state.category = 1
        state.data = []
        state.preData = []
        state.hasMorePost = true
        state.picType = "jpg"
        state.page = 1
      },
    },
});

export const {changePicType, searchResult, addPreData, ResetSearch} = searchSlice.actions;
export default searchSlice.reducer;