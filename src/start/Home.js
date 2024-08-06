import logo from '../logo.svg';
import '../App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './Main';



function Home() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          아래을 링크를 클릭하세요
        </p>
        Learn Start React Tutorial
        <Link to="/main" ><p style={{color: 'green'}}> main {"<Link>"} </p></Link>
        {/* uri 상 해당 주소가 들어가게되면 매칭된 element가 표출된다. */}
        <Routes>
          <Route path="/main" element={ <Main /> }></Route>
          {/* path="*"은 최하단에 두며 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 확인하고, 일치하는 라우트가 없다면 이 라우트가 화면에 나타나게 됩니다. */}
        </Routes>
      </header>
    </div>
  );
}

export default Home;
