import React,{useState} from "react";

export default function Count3() {
  const [count, setCount] = useState(30);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}
