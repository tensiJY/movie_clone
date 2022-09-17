//  라우터 종료는 해시라우터, 브라우저 라우터가 있음
//  Switch를 지원하지 않음 따라서 Switch -> Routes 사용
//  Link는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
