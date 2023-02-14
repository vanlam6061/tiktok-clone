import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
console.log(React);
//Chưa dùng  Hooks, chỉ là UI components
function ComponentA() {
  return <h1>Haven't used hooks yet</h1>;
}

// Sử dụng Hooks, hỗ trợ thêm nhiều tính năng
// function ComponentB() {
//   const [state, setState] = useState(initState);
// }

function App1() {
  const [counter, setCouter] = useState(1);
  const handleIncrease = () => {
    setCouter(counter + 1);
  };

  // const handleIncrease = () => {
  //   setCouter(counter + 1);
  // };
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}
//
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App1 />);
const initalState = 5;
function ComponentB() {
  const [counter, setCounter] = useState(initalState);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
