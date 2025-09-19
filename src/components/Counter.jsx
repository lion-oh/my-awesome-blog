import { useState } from "react";

export default function Counter() {
  const [n, setN] = useState(0);
  return (
    <div style={{ display:"inline-flex", gap: ".5rem", alignItems:"center", border: "1px solid #ccc", padding: ".5rem 1rem", borderRadius: 8 }}>
      <button onClick={() => setN((x) => x - 1)}>-</button>
      <strong>{n}</strong>
      <button onClick={() => setN((x) => x + 1)}>+</button>
    </div>
  );
}

