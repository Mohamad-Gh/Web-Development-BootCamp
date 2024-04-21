import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [box, setBox] = useState([{ boxTitle: "", boxText: "" }]);

  function handleAdd(obj) {
    setBox((prvs) => [obj, ...prvs]);
  }

  function deletBox(boxId) {
    setBox((prvs) => prvs.filter((element) => element.boxTitle != boxId));
  }

  return (
    <div>
      <Header title="Keeper" />
      <CreateArea onAdd={handleAdd} />
      {box.map((element) => (
        <Note
          id={element.boxTitle}
          key={element.boxTitle}
          title={element.boxTitle}
          content={element.boxText}
          onRemove={deletBox}
        />
      ))}
      <Footer author="MGH" />
    </div>
  );
}

export default App;
