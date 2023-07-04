import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { data } from "../shared/data";
function Work() {
  const navigate = useNavigate();

  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/work/${item.id}`}>{item.todo}</Link>
          </div>
        );
      })}
      <div>Work</div>
      <button onClick={() => navigate("/")}> home으로 이동</button>
    </>
  );
}

export default Work;

// 로케이션을 통해서 현재의 정보를 알수 있다 이런것을 통해서 페이지의 조건부랜더링이 가능한다.
// 굳이 index를 가져오지 않고 items.id를 통해서 key를 설정해서 map을 뿌려주자.
//  앞에 슬래쉬를 하는 이유 === 절대경로로 바뀌기 때문 안하면 상대경로로 간다 /work/work/1 이런데로 간다
// navigate랑 Location 이거는 어떻게 써야 좋을까??
