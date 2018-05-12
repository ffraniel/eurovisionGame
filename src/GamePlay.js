import React, { Component } from 'react';
import './GamePlay.css';
import lyrics from './EurovisionLyrics';
import Answer from './Answer';
import Question from './Question';
import GameEnd from './GameEnd';

class GamePlay extends Component {
  constructor(props){
    super(props);
    this.state={
      lyrics:lyrics,
      currentAnswer:{},
      currentChoice:[],
      questionModeTrueAnswerModeFalse:true,
      currentRound:1,
      previousSongs:[],
      answerCorrect:'',
      points:0
    }
    this.giveAnswer = this.giveAnswer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.chooseSongs = this.chooseSongs.bind(this);
  }

  componentDidMount(){
    this.chooseSongs(this.state.lyrics);
  }

  chooseSongs(lyrics){
    var options = [];
    while(options.length <= 4){
      let selection = lyrics[Math.round(Math.random() * lyrics.length)];
      if(selection !== undefined){
        let addSelection = true;
        for(var j = 0; j < options.length; j++) {
          if (selection.country === options[j].country){
            addSelection = false;
          }
        }
        if(addSelection) {
          options.push(selection);
        }
      }
    }
    var songChoice = undefined;
    while(songChoice === undefined){
      songChoice = options[Math.round(Math.random() * options.length)];
      if(songChoice){
        if(this.state.previousSongs.includes(songChoice.country)){
          songChoice = undefined;
        }
      }
    }
    let previousSongsState = this.state.previousSongs;
    previousSongsState.push(songChoice.country);
    this.setState({
      currentAnswer:songChoice,
      currentChoice:options,
      previousSongs:previousSongsState
    })
  }

  //display currentRound
  // on load select random song 
  //add to currentAnswer and previousSongs
  // show 6 countries chosen at random
  // select a random snippet of the text and show it
  
  giveAnswer(answer){
    if(answer === this.state.currentAnswer.country){
      var statePoints = this.state.points;
      statePoints ++;
      this.setState({
        answerCorrect:true,
        questionModeTrueAnswerModeFalse: false,
        points:statePoints

      })
    } else{
      this.setState({
        answerCorrect:false,
        questionModeTrueAnswerModeFalse: false
      })
    }
  }

  nextQuestion () {
    this.chooseSongs(this.state.lyrics);
    let round = this.state.currentRound;
    round ++;

    this.setState({
      questionModeTrueAnswerModeFalse:true,
      currentRound: round,
      answerCorrect:''  
    })
  }

    render() {
      return (
          <div className="gamePlay">
            {this.state.currentRound < 6 && 
            <div>
              <h3>Round {this.state.currentRound}</h3>
              <h4>Points {this.state.points}</h4>
              {this.state.questionModeTrueAnswerModeFalse && this.state.currentAnswer && <Question answer={this.state.currentAnswer} options={this.state.currentChoice} giveAnswer={this.giveAnswer}/>}
              {!this.state.questionModeTrueAnswerModeFalse && <Answer answer={this.state.currentAnswer} answerCorrect={this.state.answerCorrect} nextQuestion={this.nextQuestion}/>}
            </div>}
            {this.state.currentRound === 6 && <GameEnd startGame={this.props.startGame} points={this.state.points} />}            
          </div>
      )
    }
}

export default GamePlay;