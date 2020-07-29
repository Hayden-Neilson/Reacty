import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    state = {
      persons: [
        { name: "Max", age: 28 },
        { name: "george", age: 54 },
        { name: "betty", age: 37 },
      ],
    }
  })

  const switchNameHandler = () => {
    // console.log("was clicked");
    setPersonsState({
      persons: [
        { name: "Maxy", age: 28 },
        { name: "george", age: 54 },
        { name: "betty", age: 89 },
      ],
    });
  };

  


  return (
    <div className="App">
      <h1>Hi Im a react app</h1>
      <button onClick={switchNameHandler}>Switch Name</button>;
      <p>This is really working</p>;
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  )
}


export default app;



