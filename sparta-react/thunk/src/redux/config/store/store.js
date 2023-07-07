import {configureStore} from "@reduxjs/toolkit"
import counter from "../../modules/counter"
import todos from "../../modules/todos";
const store = configureStore({
  reducer : {
    counter,
    todos
  }
});

export default store;


// 툴킷 전역관리 1. slice 이거랑 configStore
// configureStore를 import 할때 {} 꼭 씌우기



