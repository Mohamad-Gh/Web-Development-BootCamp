import React, { useState } from "react";

function App() {
  const time = new Date().toLocaleTimeString();

  const [timer, setTime] = useState(time);

  // showing the time by Clicking the time button
  // function settingTime() {
  //   let newTime = new Date().toLocaleTimeString();
  //   setTime(newTime);
  // }

  // showing the Time automaticly
  function updatingTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(updatingTime, 1);
  return (
    <div className="container">
      <h1>{timer}</h1>
      {/* <button onClick={setting}>Get Time</button> */}
      <button>Get Time</button>
    </div>
  );
}

export default App;
