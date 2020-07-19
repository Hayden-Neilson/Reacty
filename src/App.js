import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hi I'm a react app</h1>
      <button>Switch Name</button>
      <img src={logo} className="App-logo" alt="logo" />
      <p>This is really working</p>
      <Person name="max" age="17" />
      <Person name="george" age="54" />
      <Person name="betty" age="37" />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
