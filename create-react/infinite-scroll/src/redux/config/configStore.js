import { configureStore } from "@reduxjs/toolkit";
import search from "../reducers/searchSlice"
console.log(search)
const store = configureStore({
  reducers: {
    search
  }
})

export default store;