import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
    render() {
      return (
          <div className="intro">
            <h1 className="App-title">EUROVISION LYRICS GAME</h1>
            <button onClick={this.props.startGame} className="App-intro">Play Game</button>
          </div>
      )
    }
}

export default Intro;