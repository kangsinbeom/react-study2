import {combineReducers} from'redux';
import { createStore } from'redux';
import counter from '../modules/counter';

const rootReducer = combineReducers({
  counter,
});
const store = createStore(rootReducer);

export default store;
// export로 내보냈다면 중괄호로 끌어오지 않아도 된다.
// 궁금증 1) 그렇다면 export로 내보내지 않은것은 무엇인가? 내보냈던 함수 내부에 선언된 메소드인가?