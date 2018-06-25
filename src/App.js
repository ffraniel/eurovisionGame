import React, { Component } from 'react';
import './App.css';
import Intro from './Intro';
import GamePlay from './GamePlay';
import LinkWeb from './LinkWeb.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      gameActive:false
    }
    this.startGame = this.startGame.bind(this);
  }

  startGame (e) {
    e.preventDefault();
    this.state.gameActive ?  this.setState({
      gameActive:false
    }) :
    this.setState({
      gameActive:true
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {!this.state.gameActive &&  <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/3/3a/Eurovision_Song_Contest_logo.svg/1280px-Eurovision_Song_Contest_logo.svg.png" className="App-logo" alt="eurovision logo spinning" />}
        </header>
        <div className="center">
          {!this.state.gameActive && <Intro startGame={this.startGame} /> }
          {this.state.gameActive && <GamePlay startGame={this.startGame} />}
        </div>
        <LinkWeb />
      </div>
    );
  }
}

export default App;
