import { createSlice } from "@reduxjs/toolkit";
let idNum = 4

const initialState = {
  id: idNum, 
  title: "", 
  author: "" 
}

const todosSlice = createSlice({
  name : "todos",
  initialState,
  reducers: {
    addTodos : (state, action) => {

    }
  }
})

export const { addTodos } = todosSlice.actions
export default todosSlice.reducer