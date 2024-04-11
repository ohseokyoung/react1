import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Board from './pages/Board';
import Notice from './pages/Notice';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          {/* 매핑주소 */}
        <Route path="/" element={<Layout/>}>
              {/* /로 접속하면 Home */}
              <Route index element={<Home/>}></Route>
              <Route path="/board" element={<Board/>}></Route>
              <Route path="/notice" element={<Notice/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
