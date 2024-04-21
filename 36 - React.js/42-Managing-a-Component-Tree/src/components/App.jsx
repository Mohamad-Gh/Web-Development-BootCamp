import React, { useState } from "react";
import ToDoItem from "./ToDoItems";
import Input from "./Input";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState(["Add Item"]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [
        inputText,
        ...prevItems.filter((listItem) => listItem != "Add Item"),
      ];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <Input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <ToDoItem item={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
