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

class Counter extends React.Component {
  render() {
    return(
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <div className="counter-score"> {this.props.score} </div>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
}

Counter.PropTypes = {
  score: PropTypes.number.isRequired,
};

class Player extends React.Component {
  render() {
    return (
      <div className="players">
        <div className="player">
          <div className="player-name">
            {this.props.name}
          </div>
          <div className="player-score">
            <Counter score={this.props.score} />
          </div>
        </div>
      </div>

    );
  }
}

Player.PropTypes = {
  name: PropTypes.string.isRequired,
};

class Application extends React.Component {
  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} />

        <Player name="Steven" score="31" />
        <Player name="Jim" score="51" />

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
