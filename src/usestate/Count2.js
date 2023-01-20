import React, { useState } from "react";

export default function Count2() {
  const [count, setCount] = useState(20);
  return (
    <div>
      <button onClick={() => setCount(count + 20)}>Count {count}</button>
    </div>
  );
}
