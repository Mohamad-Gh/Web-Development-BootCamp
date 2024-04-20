import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({ fName: "", lName: "" });

  function handleChanges(event) {
    const { value, name, placeholder } = event.target;
    // console.log(value, name);
    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          lName: prevValue.lName,
          fName: value,
        };
      } else if (name === "lName") {
        return {
          lName: value,
          fName: prevValue.fName,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChanges}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleChanges}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
