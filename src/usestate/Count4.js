import React,{useState} from "react";

export default function Count4() {
  const [count, setCount] = useState(40);
  return (
    <div>
      <button onClick={() => setCount(count + 10)}>Count {count}</button>
    </div>
  );
}
