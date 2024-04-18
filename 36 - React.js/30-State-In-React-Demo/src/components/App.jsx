import React from "react";

let isDone = false;

const strikeThrough = { textDecoration: "line-through" };

function strike() {
  // isDone = true;
  document.getElementById("root").style.textDecoration = "line-through";
}
function unStrike() {
  // isDone = false;
  document.getElementById("root").style.textDecoration = "unset";
}

function App() {
  return (
    <div>
      <p style={isDone ? strikeThrough : null}>Buy milk</p>
      <button onClick={strike}>Change to Strike Through</button>
      <button onClick={unStrike}>Change Back</button>
    </div>
  );
}

export default App;
