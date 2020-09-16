import React, { Component } from "react";
import { apiResponse } from "../api.js";
import DogCard from "../Components/DogCard.js";
//apiResponse is an array of obj, map through it

class FavList extends Component {
  getDoges = () => {
    return this.props.favDogs.map((dogs) => <DogCard doge={dogs} />);
  };

  render() {
    // console.log("meep");
    // console.log(this.props.favDogs);
    return <div className="list">{this.getDoges()}</div>;
  }
}

export default FavList;
