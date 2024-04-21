import React, { useState } from "react";
import ToDoItem from "./ToDoItems";
import Input from "./Input";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState(["Add Item"]);
  const [enterPushed, setEnter] = useState(false);

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

  function enterCheck(event) {
    // console.log(event.key);
    if (event.key === "Enter" && items.length > 0) {
      addItem();
    }
  }

  function deletItem(id) {
    setItems((prvs) => prvs.filter((element /*index*/) => element !== id));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onKeyDown={enterCheck}
          onChange={handleChange}
          type="text"
          value={inputText}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, indx) => (
            <ToDoItem
              key={indx}
              id={todoItem}
              item={todoItem}
              onChecked={deletItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
