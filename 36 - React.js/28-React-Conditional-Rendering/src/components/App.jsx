import React from "react";
import Login from "./Login";

const isLoggedIn = false;

// function renderCondition() {
//   if (isLoggedIn) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;
