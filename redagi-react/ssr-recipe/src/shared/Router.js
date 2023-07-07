import {Route, Routes, BrowserRouter} from'react-router-dom';
import BluePage from '../pages/BluePage';
import RedPage from '../pages/RedPage';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/red' element={<RedPage />} />
    <Route path='/blue' element={<BluePage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router;