import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Company from "../pages/Company";
const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </BrowserRouter>
    );
}

export default Router;