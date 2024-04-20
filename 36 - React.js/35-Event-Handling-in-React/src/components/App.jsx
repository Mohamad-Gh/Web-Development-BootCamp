import React, { useState } from "react";

function App() {
  const [isMouseOver, setMouse] = useState(false);

  function handleMouseOver() {
    console.log("mouse Over");
    setMouse(true);
  }

  function handleMouseOut() {
    setMouse(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

// import React, { useState } from "react";

// function App() {
//   const [buttonStyle, setButtonStyle] = useState();

//   function handleMouseOver() {
//     // let styleColor = { backgroundColor: "black" };
//     console.log("mouse Over");
//     setButtonStyle({ backgroundColor: "black" });
//     console.log(buttonStyle);
//   }

//   function handleMouseOut() {
//     setButtonStyle({ backgroundColor: "white" });
//     console.log("mouse Out");
//   }

//   return (
//     <div className="container">
//       <h1>Hello</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button
//         style={buttonStyle}
//         onMouseOver={handleMouseOver}
//         onMouseOut={handleMouseOut}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }
