import { configureStore } from "@reduxjs/toolkit";
import counter from "../modules/counter";

// Redux toolkit을 이용한 store
const store = configureStore({
  reducer : {
    counter,
  }
});

export default store;