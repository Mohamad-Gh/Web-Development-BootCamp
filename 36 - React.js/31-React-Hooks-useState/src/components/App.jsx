import React, { useState } from "react";

function App() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount(count + 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
