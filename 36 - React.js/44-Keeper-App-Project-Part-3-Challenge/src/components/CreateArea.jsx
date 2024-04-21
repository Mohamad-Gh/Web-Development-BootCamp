import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function handleChangeTitle(event) {
    setTitle(event.target.value);
  }

  function handleChangeText(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          props.onAdd({ boxTitle: title, boxText: text });
          event.preventDefault();
          setText("");
          setTitle("");
        }}
      >
        <input
          onChange={handleChangeTitle}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={handleChangeText}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={text}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
