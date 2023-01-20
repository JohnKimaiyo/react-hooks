import React, { useState } from "react";

export default function Count1() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <button onClick={() => setCount(count + 10)}>Count {count}</button>
    </div>
  );
}
