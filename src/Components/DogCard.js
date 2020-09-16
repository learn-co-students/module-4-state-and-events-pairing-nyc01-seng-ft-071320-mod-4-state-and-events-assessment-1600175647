import React from "react";

class DogCard extends React.Component {
  state = { clicked: true };

  clickHandler = () => {
    this.props.appClickHandler(this.props.doge);
  };

  render() {
    return (
      <div className="card">
        <span className="content">
          <h2>{this.props.doge.name}</h2>
          <img alt="" src={this.props.doge.img} />
        </span>
        <span className="bark">
          {this.props.appClickHandler && (
            <button onClick={this.clickHandler}>Favorite</button>
          )}
        </span>
      </div>
    );
  }
}

export default DogCard;
