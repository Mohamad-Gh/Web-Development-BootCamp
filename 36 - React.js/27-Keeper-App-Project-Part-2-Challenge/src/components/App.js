import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((element) => (
        <Note key={element.key} title={element.title} text={element.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
