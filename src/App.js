import { Routes, Route } from 'react-router-dom';
import Main from './start/Main';
import Home from './start/Home';

function App() {

  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path="/main" element={ <Main /> }></Route>
      <Route path="/main/:param1" element={ <Main param2={2} /> }></Route>
      {/* path="*"은 최하단에 두며 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 확인하고, 일치하는 라우트가 없다면 이 라우트가 화면에 나타나게 됩니다. */}
    </Routes>
  );
}

export default App;
