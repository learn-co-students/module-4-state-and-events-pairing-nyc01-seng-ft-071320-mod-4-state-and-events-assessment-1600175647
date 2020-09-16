import React, { Component } from "react";
import "./App.css";
import DogsList from "./Containers/DogsList";
import FavList from "./Containers/FavList";

class App extends Component {
  state = {
    favDogs: [],
  };

  appClickHandler = (newDoge) => {
    if (!this.state.favDogs.includes(newDoge)) {
      this.setState({
        favDogs: [...this.state.favDogs, newDoge],
      });
    }
    // if this.state.favoriteDog has dog
    //   remove the dog from the list
  };
  render() {
    return (
      <div className="app">
        <DogsList appClickHandler={this.appClickHandler} />
        <FavList favDogs={this.state.favDogs} />
      </div>
    );
  }
}

export default App;
