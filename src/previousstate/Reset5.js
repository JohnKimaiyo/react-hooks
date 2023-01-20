import React ,{useState}from "react";

export default function Reset5() {
  const initialCount = 50;
  const [count, setCount] = useState(initialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 10);
    }
  };
  return (
    <div>
      Count:{count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 10)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 10)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}
