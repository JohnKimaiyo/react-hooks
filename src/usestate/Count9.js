import React,{useState} from "react";

export default function Count9() {
  const [count, setCount] = useState(90);
  return (
    <div>
      <button onClick={() => setCount(count + 10)}>Count{count}</button>
    </div>
  );
}
