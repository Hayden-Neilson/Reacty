import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "george", age: 54 },
      { id: "3", name: "betty", age: 37 },
    ],
    showPersons: false,
  };

  // switchNameHandler = () => {
  //   // console.log("was clicked");
  //   this.setState({
  //     persons: [
  //       { name: "Max", age: 28 },
  //       { name: "george", age: 54 },
  //       { name: "betti", age: 78 },
  //     ],
  //   });
  // };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi Im a react app</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Name
        </button>
        {persons}
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

{
  /* 
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
          /> */
}
