import React, { useState } from "react";

export default function Count7() {
  const [count, setCount] = useState(70);
  return (
    <div>
      <button onClick={() => setCount(count + 10)}>Count{count}</button>
    </div>
  );
}
