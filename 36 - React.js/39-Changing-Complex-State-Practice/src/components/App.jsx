import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChanges(event) {
    const { value, name } = event.target;
    setContact((prvValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prvValue.lName,
          email: prvValue.email,
        };
      } else if (name === "lName") {
        return {
          fName: prvValue.fName,
          lName: value,
          email: prvValue.email,
        };
      } else if (name === "email") {
        return {
          fName: prvValue.fName,
          lName: prvValue.lName,
          email: value,
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChanges}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleChanges}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          type="email"
          onChange={handleChanges}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
