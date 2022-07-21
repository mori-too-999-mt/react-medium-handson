import React, { useState } from "react";
import "./styles.css";

export default function App() {
  console.log("app");
  const [count, setCount] = useState(0);
  const onClickCountup = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{count}</p>
      <button onClick={onClickCountup}>countup</button>
    </div>
  );
}