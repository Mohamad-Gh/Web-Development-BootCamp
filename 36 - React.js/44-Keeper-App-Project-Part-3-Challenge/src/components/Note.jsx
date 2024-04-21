import React from "react";

function Note(props) {
  return (
    <div className="note" id={props.title}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onRemove(props.title);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
