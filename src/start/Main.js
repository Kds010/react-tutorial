// import React, { useEffect } from 'react';
import React from 'react';
// import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Game from '../pages/tic-tac-toe/tic-tac-toe';

function Header() {
  return (
    <header style={{ padding: '10px', background: '#eee', textAlign: 'center' }}>
      <h1>My React App</h1>
    </header>
  );
}

// function About() {
//   const location = useLocation();
//   useEffect(() => {
//     console.log("About : "+location.pathname);
//   }, [ location])
//   return <div><h2>About</h2><p>This is the About page.</p></div>;
// }

// function Contact() {
//   const location = useLocation();
//   useEffect(() => {
//     console.log("Contact : "+location.pathname);
//   }, [ location])
//   return <div><h2>Contact</h2><p>This is the Contact page.</p></div>;
// }

function Main() {
  // const location = useLocation();
  // useEffect(() => {
  //   console.log(location);
  // }, [ location])
  return (
      <div>
        <Header />
        <Game />
        {/* <nav style={{ textAlign: 'center', margin: '20px 0' }}>
          <Link to="" style={{ margin: '0 10px' }}>
            <button>Main</button>
          </Link>
          <Link to="/main/about" style={{ margin: '0 10px' }}>
            <button>About</button>
          </Link>
          <Link to="/main/contact" style={{ margin: '0 10px' }}>
            <button>Contact</button>
          </Link>
        </nav>
        {/* <Routes>
            <Route path='/' element={<Contact />} />
        </Routes>
        <Contact />
        <div style={{ padding: '20px', border: '1px solid #ccc', height: 100 }}>
          <Routes>
            <Route path='/' element={ <>abc</>} />
            <Route path='/main/contact' element={<Contact />} />
            <Route path='/main/about' element={<About />} />
            <Route path='/*' element={<>***</>} />
          </Routes>
        </div> */}
      </div>
  );
}

export default Main;




// import { Link, Route, Routes } from 'react-router-dom';
// import './Start.css';
// import Header from './Header';
// import Tutorial from '../pages/tutorial/tutorial';

// function Main({param2}) {

//   return (
//       <div className="Start">
//         <Header />
//         <div className="Start-header">
//           <Link to="tutorial">튜토리얼</Link>
//         </div>
//         <Routes>
//           <Route path = "./tutorial/:parma1" element={ <Tutorial param2={1} /> } />
//         </Routes>
//       </div>
//   );
// }

// export default Main;
