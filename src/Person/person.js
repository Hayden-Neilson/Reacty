import React from "react";
import radium from "radium";

import "./Person.css";
import Radium from "radium";
const Person = (props) => {
  return (
    <div className="Person">
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(Person);
