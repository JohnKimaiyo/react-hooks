import React, { useState } from "react";

export default function Count10() {
  const [count, setCount] = useState(100);
  return (
    <div>
      <button onClick={() => setCount(count + 10)}>Count{count}</button>
    </div>
  );
}
