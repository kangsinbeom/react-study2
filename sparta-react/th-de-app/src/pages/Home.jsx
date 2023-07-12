import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let timeId = null;
  const [state, setState] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      if (timeId) {
        clearTimeout(timeId);
      }
    };
  }, []);

  const throttle = (delay) => {
    if (timeId) {
      return;
    }
    setState(!state);
    // 이상태는 무조건적으로 정상동작하지 않는다 왜냐 state가 바뀌면서 리랜더링되는것과 스로틀링이 겹치기 때문에
    console.log(`API요청 실행! ${delay}ms 동안 추가요청은 안받습니다.`);
    timeId = setTimeout(() => {
      console.log(`${delay}ms 지남 추가요청 받습니다`);
      timeId = null;
    }, delay);
  };

  // 반복적인 이벤트 이후, delay가 지나면 function
  const debounce = (delay) => {
    if (timeId) {
      // 할당되어 있는 timerId에ㅔ 해당하는 타이머 제거
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      console.log(`마지막 요청으로부터 ${delay}만큼 지났으므로 API 요청 실행`);
      timeId = null;
    }, delay);
  };
  return (
    <div
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <h1>button event</h1>
      <button onClick={() => throttle(2000)}>throttling btn</button>
      <button onClick={() => debounce(2000)}>debouncing btn</button>
      <div>
        <button onClick={() => navigate("/company")}>move page</button>
      </div>
    </div>
  );
};
export default Home;

// setTimeout은 항상 어떠한 값을 반환핟다 이 반환하는 값을 timerId라고 한다
// const result = setTimeout(() => {console.log("hello")}, 3000) 쓰자마자 실행되는 setTimeout
// result를 호출하면 숫자가 나온다 신기하네

// 메모리누수
// 스로틀링을 누르고 페이지를 이동했는데 이전에 작동시킨 스로틀링이 페이지를 이동한 후에도 동작을 하는 것을 보니 영향을 끼치는 것을 알 수 있다
// 이때 useEffect의 retur을 사용하면 된다. 홈이라는 컴포넌트가 사라질때 동작을 하는 클린업 함수
