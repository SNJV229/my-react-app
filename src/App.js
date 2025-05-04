import './App.css';
import Counter from './Counter';
import { useState } from 'react';


function App() {
  // JSX Example
      // What is JSX?
      //   - JSX stands for JavaScript XML.
      //   - It lets you write HTML inside JavaScript.
      //   - JSX is a syntax extension for JavaScript that looks similar to HTML.
      //   - It is used with React to describe what the UI should look like.

      // Why use JSX?
      //   - Makes it easier to visualize the UI.
      //   - More readable and closer to HTML.

  // const name = 'Sanjeev';
  // const greeting = <h1>Hello, {name}!</h1>;

  // What is State?
  //   - State is a built-in React object that allows you to manage dynamic data in your components.
  //   - It allows components to respond to user input, server responses, and other events.
  //   - State is mutable, meaning it can change over time.
  //   - State is local to the component and cannot be accessed directly from outside the component.
  //   - State is managed using the useState hook in functional components.
  //   - When the state changes, the component re-renders.


  // const [count, setCount] = useState(0);


  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>


      {/* Jsx Example */}
      {/* {greeting} */}

      {/* State Example */}
      {/* <h1> Counter App </h1>
      <h2> Count: {count} </h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button> */}

      {/* Component Example */}
      <Counter />

    </div>
  );
}

export default App;
