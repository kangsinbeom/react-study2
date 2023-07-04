import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Work() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div>Work</div>
      <button onClick={() => navigate("/")}> home으로 이동</button>
    </>
  );
}

export default Work;

// 로케이션을 통해서 현재의 정보를 알수 있다 이런것을 통해서 페이지의 조건부랜더링이 가능한다.
