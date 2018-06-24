import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
    render() {
      return (
          <div className="intro">
            <h1 className="App-title">EUROVISION 2018 LYRICS GAME</h1>
            <p className="subtitle">Guess the nationality of the song from the lyrics.</p>
            <button onClick={this.props.startGame} className="App-intro">Play Game</button>
          </div>
      )
    }
}

export default Intro;