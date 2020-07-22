import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "george", age: 54 },
      { name: "betty", age: 37 }

    ]
  }

}
  return (
    <div className="App">
      <h1>Hi I'm a react app</h1>
      <button>Switch Name</button>
      <img src={logo} className="App-logo" alt="logo" />
      <p>This is really working</p>
      <Person name="max" age="17" />
      <Person name="george" age="54" />
      <Person name="betty" age="37" />
    </div>
  );
}

export default App;
