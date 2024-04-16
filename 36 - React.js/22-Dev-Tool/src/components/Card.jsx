import React from "react";
import Avatar from "./Avatar";
import contacts from "../contacts";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar image={props.img} />
      </div>
      <div className="bottom">
        <Detail detlsInf={props.tel} />
        <Detail detlsInf={props.email} />
      </div>
    </div>
  );
}

export default Card;
