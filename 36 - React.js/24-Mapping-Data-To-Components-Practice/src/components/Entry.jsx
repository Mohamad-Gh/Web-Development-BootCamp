import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}
function createEntry(element) {
  return (
    <Entry
      key={element.id}
      name={element.name}
      aria-label={element.name}
      emoji={element.emoji}
      meaning={element.meaning}
    />
  );
}
export default createEntry;
