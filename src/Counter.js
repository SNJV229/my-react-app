import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  console.log("Component re-rendered! Current count:", count);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1> Counter App </h1>
      <h2> Count: {count} </h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
