import React, { useState } from "react";

export default function Count5() {
  const [count, setCount] = useState(50);
  return (
    <div>
      <button onClick={() => setCount(count + 10)}>Count {count}</button>
    </div>
  );
}
