import React, { Component } from 'react';
import './GamePlay.css';
import lyrics from './EurovisionLyrics';

class GamePlay extends Component {
  constructor(props){
    super(props);
    this.state={
      lyrics:lyrics
    }
  }
    render() {
      return (
          <div className="gamePlay">
            <h1>game play</h1>
            <button onClick={this.props.startGame}>Restart</button>
          </div>
      )
    }
}

export default GamePlay;