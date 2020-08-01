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
        { name: "betti", age: 78 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 54 },
        { name: "betti", age: 78 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi Im a react app</h1>
        <button onClick={this.switchNameHandler("maximillan")}>
          Switch Name
        </button>
        <p>This is really working</p>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "max")}
          changed={this.nameChangedHandler.bind(this)}
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

// const app = (props) => {
//   const [personsState, setPersonsState] = {
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "george", age: 54 },
//       { name: "betty", age: 37 },
//     ],
//   };

//   const switchNameHandler = () => {
//     // console.log("was clicked");
//     setPersonsState({
//       persons: [
//         { name: "Maxy", age: 28 },
//         { name: "george", age: 54 },
//         { name: "betty", age: 89 },
//       ],
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi Im a react app</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>;
//       <p>This is really working</p>;
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       />
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
// };
