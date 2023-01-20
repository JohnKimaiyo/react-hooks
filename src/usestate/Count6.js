import React, { useState } from "react";

export default function Count6() {
  const [count, setCount] = useState(60);
  return (
    <div>
      <button onClick={() => setCount(count + 10)}>Count{count}</button>
    </div>
  );
}
