import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const dicrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={increment} className="btn btn-dark m-1">
        +
      </button>
      <button onClick={dicrement} className="btn btn-danger m-1">
        -
      </button>
    </div>
  );
};

export default Counter;
