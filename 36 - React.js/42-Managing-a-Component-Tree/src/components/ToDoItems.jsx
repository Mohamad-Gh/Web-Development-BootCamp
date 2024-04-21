import React, { useState } from "react";

function ToDoItem(props) {
  const [clickState, setClickState] = useState(false);

  function handleClick() {
    setClickState(!clickState);
    // to practice arrow function
    // setClickState(() => (clickState ? false : true));
    // setClickState((prevValue) => !prevValue);
  }
  return (
    <li
      style={{ textDecoration: clickState && "line-through" }}
      onClick={handleClick}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
