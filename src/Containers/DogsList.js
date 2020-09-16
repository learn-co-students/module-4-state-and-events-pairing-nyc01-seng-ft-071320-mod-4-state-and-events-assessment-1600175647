import React, { Component } from "react";
import { apiResponse } from "../api.js";
import DogCard from "../Components/DogCard.js";
//apiResponse is an array of obj, map through it

class DogsList extends Component {
  getDoges = () => {
    return apiResponse.map((dogs) => (
      <DogCard appClickHandler={this.props.appClickHandler} doge={dogs} />
    ));
  };

  render() {
    return <div className="list">{this.getDoges()}</div>;
  }
}

export default DogsList;
