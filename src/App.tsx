import React, { useRef } from "react";
import "./styles.css";

export default function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>フォーカス</button>
    </div>
  );
}
