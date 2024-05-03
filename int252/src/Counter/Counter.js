import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named 'count' initialized to 0
  const [count, setCount] = useState(0);

  // Event handler to increment count
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <h2>Counter using Use-State</h2>
      <button onClick={incrementCount}>Increment</button>
      <p>Count: {count}</p>
      <button onClick={decrementCount}>Increment</button>
    </div>
  );
}

export default Counter;
