import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [box, setBox] = useState([
    { title: "Note Title", content: "Note Content" },
  ]);

  function handleAdd(obj) {
    setBox((prvs) => [
      obj,
      ...prvs.filter((element) => element.title != "Note Title"),
    ]);
  }

  function deletBox(boxId) {
    setBox((prvs) => prvs.filter((element) => element.title != boxId));
  }

  return (
    <div>
      <Header title="Keeper" />
      <CreateArea onAdd={handleAdd} />
      {box.map((element, indx) => (
        <Note
          key={indx}
          title={element.title}
          content={element.content}
          onRemove={deletBox}
        />
      ))}
      <Footer author="MGH" />
    </div>
  );
}

export default App;
