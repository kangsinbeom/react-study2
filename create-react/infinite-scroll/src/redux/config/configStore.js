import { configureStore } from "@reduxjs/toolkit";
import search from "../reducers/searchSlice"

const store = configureStore({
  reducers: {
    search
  }
})

export default store;