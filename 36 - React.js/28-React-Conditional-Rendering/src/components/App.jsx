import React from "react";
import Login from "./Login";

isLoggedIn = false;

function renderCondition() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return <div className="container">{renderCondition()}</div>;
}

export default App;
