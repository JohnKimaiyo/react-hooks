import React, { useEffect } from "react";

export default function Count1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click{count} times</button>
    </div>
  );
}
