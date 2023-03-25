import React, { useState } from "react";
import { act } from "react-dom/test-utils";

function Todo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([
    { name: "Item A" },
    { name: "Item B" },
    { name: "Item C" },
  ]);
  return (
    <div>
      <label>
        Text
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button
        onClick={() => {
          act(() => setItems((prev) => [...prev, { name: text }]));
          setText("");
        }}
      >
        Add
      </button>
      <br />
      <br />

      {items.map((item, key) => (
        <div key={key}>{item.name}</div>
      ))}
    </div>
  );
}

export default Todo;
