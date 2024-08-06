import React from 'react';
import ThinkInReact from '../pages/think-in-react/thinkInReact1';

function Header() {
  return (
    <header style={{ padding: '10px', background: '#eee', textAlign: 'center' }}>
      <h1>My React App</h1>
    </header>
  );
}

function Main() {
  return (
      <div>
        <Header />
        <ThinkInReact />
      </div>
  );
}

export default Main;