import React ,{useState}from "react";

export default function Count8() {
  const [count, setCount] = useState(80);
  return (
    <div>
      <button onClick={() => setCount(count + 10)}>Count{count}</button>
    </div>
  );
}
