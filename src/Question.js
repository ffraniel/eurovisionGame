import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
    render() {
      return (
          <div className="question">
          {console.log(this.props.options)}
            <h4>"....{this.props.snippet}...."</h4>
            <div className="choiceOfNations">
                {this.props.options.map((song, key)=>{
                    return (
                        <button key={key} onClick={(e)=>{e.preventDefault(); this.props.giveAnswer(song.country)}}>{song.country}</button>
                    )
                })}
            </div>
          </div>
      )
    }
}

export default Question;