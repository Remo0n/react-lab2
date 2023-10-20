import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter App</h1>
      <p className="counter-value">Count: {count}</p>
      <div className="button-container">
        <button className="button increment-button" onClick={increment}>
          Increment
        </button>
        <button className="button decrement-button" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
