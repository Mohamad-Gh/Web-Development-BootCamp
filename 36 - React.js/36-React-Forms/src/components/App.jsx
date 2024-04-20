import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }
  function handleSubmit() {
    setUserName(name);
  }

  // function handleSubmit() {
  //   setUserName(name);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1>Hello {userName}</h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default App;
