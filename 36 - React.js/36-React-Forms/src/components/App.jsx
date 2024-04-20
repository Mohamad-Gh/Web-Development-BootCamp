import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  let newName = "";
  function handleChange(event) {
    setName(event.target.value);
    // console.log(name);
  }
  function handleSubmit() {
    setUserName(name);
  }

  return (
    <div className="container">
      <h1>Hello {userName}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
