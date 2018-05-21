import React, { Component } from 'react';
import './GamePlay.css';
import lyrics from './lyricsJson.json';
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
      points:0,
      lyricalSnippet:''
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
    let snippetArray = songChoice.lyrics.split(" ");
    let start = Math.round(Math.random() * (snippetArray.length / 2));
    let possibleLengths = [30, 50, 20, 40];
    let snippetLength = possibleLengths[Math.round(Math.random() * possibleLengths.length)];
    let end = start + snippetLength;
    let snippet = snippetArray.slice(start, end).join(" ");
    if(snippet.length === 0 ){
      snippetArray = songChoice.lyrics.split(" ");
      start = Math.round(Math.random() * (snippetArray.length / 2));
      possibleLengths = [30, 50, 20, 40];
      snippetLength = possibleLengths[Math.round(Math.random() * possibleLengths.length)];
      end = start + snippetLength;
      snippet = snippetArray.slice(start, end).join(" ");
    }

    let previousSongsState = this.state.previousSongs;
    previousSongsState.push(songChoice.country);
    this.setState({
      currentAnswer:songChoice,
      currentChoice:options,
      previousSongs:previousSongsState,
      lyricalSnippet:snippet
    })
  }
  
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
              <h3>Round {this.state.currentRound}/5</h3>
              <h4>Points <span>{this.state.points}</span></h4>
              {this.state.questionModeTrueAnswerModeFalse && <Question answer={this.state.currentAnswer} options={this.state.currentChoice} giveAnswer={this.giveAnswer} snippet={this.state.lyricalSnippet} />}
              {!this.state.questionModeTrueAnswerModeFalse && <Answer answer={this.state.currentAnswer} answerCorrect={this.state.answerCorrect} nextQuestion={this.nextQuestion}/>}
            </div>}
            {this.state.currentRound === 6 && <GameEnd startGame={this.props.startGame} points={this.state.points} />}            
              {this.state.currentRound < 6 && <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/3/3a/Eurovision_Song_Contest_logo.svg/1280px-Eurovision_Song_Contest_logo.svg.png" className="low-logo" alt="eurovision logo spinning" />}
          </div>
      )
    }
}

export default GamePlay;