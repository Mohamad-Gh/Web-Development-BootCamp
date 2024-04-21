import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  return (
    <div className="form">
      <input
        onKeyDown={(event) => {
          if (event.key == "Enter") {
            props.onAdd(inputText);
            setInputText("");
          }
        }}
        onChange={handleChange}
        type={props.type}
        value={inputText}
      />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
