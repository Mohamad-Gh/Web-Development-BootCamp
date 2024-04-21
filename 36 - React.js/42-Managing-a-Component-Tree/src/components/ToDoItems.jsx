import React, { useState } from "react";

function ToDoItem(props) {
  // Codes for Striking the Items
  //   const [clickState, setClickState] = useState(false);
  //   function handleClick() {
  // setClickState(!clickState);
  // to practice arrow function
  // setClickState(() => (clickState ? false : true));
  // setClickState((prevValue) => !prevValue);
  // put this one in the li element
  //   style={{ textDecoration: clickState && "line-through" }}
  //   }

  //   To hide the Item
  //   const [show, setShow] = useState(true);

  //   function handleClick(event) {
  //     console.log(event.target);
  //     setShow(!show);
  //   }
  // put this in the li element
  //   style={{ display: !show && "none" }}

  return (
    <li id={props.id} onClick={() => props.onChecked(props.id)}>
      {props.item}
    </li>
  );
}

export default ToDoItem;
