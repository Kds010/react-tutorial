import React from 'react';
// import PackingList from '../pages/ConditionalRendering';
import RenderingList from '../pages/rendering-list/Renderinglist';

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
        <RenderingList />
      </div>
  );
}

export default Main;