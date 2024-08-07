// if 와 삼항연산자는 타 언어와 동일하게

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
      {/* isPacked가 true일 시 '✔' 렌더링  */}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
