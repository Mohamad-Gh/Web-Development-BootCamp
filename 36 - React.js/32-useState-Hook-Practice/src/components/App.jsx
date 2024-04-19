import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  const [timer, setTime] = useState(time);

  function settingTime() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }

  return (
    <div className="container">
      <h1>{timer}</h1>
      {/* <button onClick={setting}>Get Time</button> */}
      <button onClick={settingTime}>Get Time</button>
    </div>
  );
}

export default App;
