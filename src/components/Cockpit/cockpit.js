import React, { useEffect } from "react";

import classes from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log("[cockpit js] useEffect ");
    // is a combo of component did update and a combo of component did mount

    setTimeout(() => {
      alert("put info in the cloud");
    }, 1000);
  }, []);

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>Person Manager </p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
