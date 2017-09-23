import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
      </div>
    );

  }
}

Header.PropTypes = {
  title: PropTypes.string.isRequired,
};

class Application extends React.Component {
  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} />

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

Application.defaultProps = {
  title: "Score Board"
};

Application.PropTypes = {
  title: PropTypes.string,
};

export default Application;
