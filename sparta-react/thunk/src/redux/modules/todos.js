import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// 풀필윗밸류와 리젝트 벨류를 사용해서 엑스트라에 넣기위해 초기값도 객체여야한다
// 이즈에러 로딩 에러 이런거쓰니깐 객체여야하는구나
const initialState = {
  todos : [],
  isLoading : false,
  isError : false,
  error : null,
  // 에러 내용을 담는 부분
}

export const __getTodos = createAsyncThunk(
  "getTodos",
  // 서버와 통신하는 부분이기에 비동기함수여야한다 
  async (payload,thunkAPI)=> {
    // fulfillWithValue 나 rejectWithValue 이 두가지를 이용해서 extraReducers 안으로 보내줄것임
    try {
      const response = await axios.get("http://localhost:3001/posts");
    // 얘네들이 디스패치도 해주는 역할을 함 액션과 페이로드를 리듀서로 전달해서 state를 업데이트해준다
    return thunkAPI.fulfillWithValue(response.data);
      // response객체의 형태를 한번 보면 이해가 쉽다
    } catch (error) {
      console.log("error: ", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
)


export const todosSlice = createSlice({
  name : "todos",
  initialState,
  reducers : {},
  // 풀필이랑 리젝트윗밸류로 인해 전달되는 애들은 여기 들어간다 
  // 이름.필, 이름,리젝트 이런식의 이름을 가진애들로 찾아간다
  extraReducers : {
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = action.payload;
    },  
    // action을 찍어보면 타입과 페이로드를 가진 객체가 나온다는 것을 알 수 있다.
    [__getTodos.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
  // pending은 진행중인 경우이다
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;