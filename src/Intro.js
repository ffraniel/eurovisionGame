import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
    render() {
      return (
          <div className="intro">
            <button onClick={this.props.startGame} className="App-intro">Play Game</button>
          </div>
      )
    }
}

export default Intro;