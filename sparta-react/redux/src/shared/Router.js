import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import Contact from "../pages/Contact";

const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    );
}

export default Router;

// 이해를 한다기 보다는 사용법을 숙지한다는 생각을 하고 라우터를 사용해 보자
// path === 경로니깐 이걸로 무슨컴포넌트를 연결할지 정하는 것이다
// 이렇게 path랑 element 맞추면 설정은 완료 이후 App.jsx에 가서 한가지 설정을 더하면 된다.

// 리액트라우트돔은 새롭게 페이지를 띄어주는 것이 아니라 컴포넌트를 페이지 이동도 깜빡임도 없이 띄어준다는 개념을 알고 있어야한다.
// 훅을 기억해야한다