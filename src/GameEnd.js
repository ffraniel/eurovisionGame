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
            <img src={require('./images/poorscore.jpeg')} alt="kid with bad score" />
          </div>
        )}
        {this.props.points > 2 &&
          this.props.points < 4 && (
            <div>
              <h3>Could do better! Try again!</h3>
              <h2>{this.props.points}/5</h2>
              {/* <img src="./images/badscore.jpeg" alt="guy with bad score" /> */}
              <img src={require('./images/badscore.jpeg')} alt="guy with bad score" />
            </div>
          )}
        {this.props.points >= 4 &&
          this.props.points < 5 && (
            <div>
              <h3>Not bad knowledge!</h3>
              <h2>{this.props.points}/5</h2>
              {/* <img src="./images/Thumbs_Up_Face_Head.jpg" alt="guy who has a thumbe for a face" /> */}
              <img src={require('./images/Thumbs_Up_Face_Head.jpg')} alt="guy who has a thumbe for a face" />
            </div>
          )}
        {this.props.points >= 5 && (
          <div>
            <h3>Superb!</h3>
            <h2>{this.props.points}/5</h2>
            <h4>You'll go far, my friend. Have some "smouldering" as a reward.</h4>
            {/* <img src="https://cdn.images.dailystar.co.uk/dynamic/46/photos/785000/RYLAN-688785.jpg" alt="Rylan" /> */}
            <img src={require('./images/rylan.jpg')} alt="Rylan smouldering for his close-up" />
          </div>
        )}
        <button onClick={this.props.startGame}>Try Again!</button>
      </div>
    );
  }
}

export default GameEnd;
