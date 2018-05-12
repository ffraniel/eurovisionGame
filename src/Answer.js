import React, { Component } from 'react';
import './Answer.css';

class Answer extends Component {
    render() {
      return (
          <div className="answer">
            {this.props.answerCorrect && <h1 className="correct">Correct!</h1>}
            {!this.props.answerCorrect && <h1 className="wrong">Wrong!</h1>}
            <h3>The correct answer was {this.props.answer.country}</h3>
            <h3>"{this.props.answer.title}" by {this.props.answer.artist}</h3>
            <div>
                <a href={this.props.answer.youtube}>
                    <img src={this.props.answer.image} alt={this.props.answer.artist} />
                </a>
            </div>
            <button className="next-button" onClick={(e)=>{this.props.nextQuestion()}}>Next</button>
          </div>
      )
    }
}

export default Answer;