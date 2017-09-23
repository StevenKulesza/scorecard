import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

Application.PropTypes = {
  title: PropTypes.string
};

Application.defaultProps = {
  title: "Score Board"
};

class Application extends React.Component {
  render() { return (
      <div className="scoreboard">
        <div className="header">
          <h1>{this.props.title}</h1>
        </div>

        <div className="players">
          <div className="player">
            <div className="player-name">
              Test User
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> 21 </div>
                <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>
        </div>

        <div className="players">
          <div className="player">
            <div className="player-name">
              Test User 2
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> 54 </div>
                <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Application;
