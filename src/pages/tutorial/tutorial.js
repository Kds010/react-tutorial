import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

function Tutorial({param2}) {

  // function handleClick2() {
  //   alert('You clicked me2!');
  // }

  const {param1} = useParams();

  const [count, setCount] = useState(0);
  function handleClickCount() {
    setCount(count + 1);
  }

  const [countHook, setCountHook] = useState(0);

  function handleClickHook() {
    setCountHook(countHook + 1);
  }

  return (
    <div className="Start">
      <header className="Start-header">
        param1 : {param1} 값 확인 <br />
        param2 : {param2} 값 확인
        <Link to="/tutorial.js">튜토리얼</Link>
        {element}
        <div className="cssTestClass"> CSS, Test </div>
        <ul>{listItems}</ul>
        <button onClick={handleClick}>
          <h3>Click me</h3>
        </button>
        <button onClick={handleClickCount}>
          <h3>Click Counter {count} </h3>
        </button>
        <MyButton />
        <MyButton />
        <MyButtonHook count={countHook} onClick={handleClickHook} />
        <MyButtonHook count={countHook} onClick={handleClickHook} />
      </header>
    </div>
  );
}

const element = <h1>Hello, world!</h1>;

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

function handleClick() {
  alert('You clicked me!');
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      <h2>Clicked {count} times</h2>
    </button>
  );
}

function MyButtonHook({ count, onClick }) {
  return (
    <button onClick={onClick}>
      <h2>Clicked {count} Hook times</h2>
    </button>
  );
}

export default Tutorial;
