import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "george", age: 54 },
      { name: "betty", age: 37 },
    ],
  };

  switchNameHandler = () => {
    // console.log("was clicked");
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: "george", age: 54 },
        { name: "betty", age: 37 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi Im a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>;
        <p>This is really working</p>;
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
