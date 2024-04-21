import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  return (
    <div>
      <Header title="Keeper" />
      <CreateArea />
      <Note key={1} title="Note title" content="Note content" />
      <Footer author="MGH" />
    </div>
  );
}

export default App;
