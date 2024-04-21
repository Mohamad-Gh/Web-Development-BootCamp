import React, { useState } from "react";

function App() {
  const [content, setContent] = useState("");
  const [list, setList] = useState(["An Item"]);
  function hangleChange(event) {
    setContent(event.target.value);
  }

  function handleButton() {
    setList((prvs) => {
      return [...prvs.filter((item) => item !== "An Item"), content];
    });
    setContent("");
  }
  // function handleButton() {
  //   if (list[0] === "A Item") {
  //     setList((prvs) => {
  //       return [...prvs.slice(1), content];
  //     });
  //   } else {
  //     setList((prvs) => {
  //       return [...prvs, content];
  //     });
  //   }
  // }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={hangleChange} type="text" value={content} />
        <button onClick={handleButton}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* <li>{list}</li> */}
          {list.map((item) => (
            <li id={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
