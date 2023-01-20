import React, { useState } from "react";

export default function Reset3() {
  const initialCount = 30;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 10);
    }
  };
  return (
    <div>
      Count:{count}
      <buton onClick={() => setCount(initialCount)}>Reset</buton>
      <button onCLick={() => setCount((prevCount) => prevCount + 10)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 10)}>
        decrement
      </button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}
