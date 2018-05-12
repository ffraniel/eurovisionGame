import React, { Component } from "react";
import "./GameEnd.css";

class GameEnd extends Component {
  render() {
    return (
      <div className="gameEnd">
        {this.props.points <= 2 && (
          <div>
            <h3>Poor effort! Try again!</h3>
            <h2>{this.props.points}/5</h2>
          </div>
        )}
        {this.props.points > 2 &&
          this.props.points < 4 && (
            <div>
              <h3>Could do better! Try again!</h3>
              <h2>{this.props.points}/5</h2>
            </div>
          )}
        {this.props.points >= 4 &&
          this.props.points < 5 && (
            <div>
              <h3>Not bad knowledge!</h3>
              <h2>{this.props.points}/5</h2>
            </div>
          )}
        {this.props.points >= 5 && (
          <div>
            <h3>Superb!</h3>
            <h2>{this.props.points}/5</h2>
            <img
              src="https://cdn.images.dailystar.co.uk/dynamic/46/photos/785000/RYLAN-688785.jpg"
              alt="Rylan"
            />
          </div>
        )}
        <button onClick={this.props.startGame}>Try Again!</button>
      </div>
    );
  }
}

export default GameEnd;
