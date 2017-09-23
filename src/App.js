import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';


var PLAYERS = [
  {
    name: "Steve Kulesza",
    score: 31
  },
  {
    name: "Hank Pratt",
    score: 66
  },
  {
    name: "Ben Jordan",
    score: 69
  }
];

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

class App extends React.Component {
  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} />

        <div className="players">
          {this.props.players.map(function(player) {
            return <Player name={player.name} score={player.score} />
          })}
        </div>

      </div>
    );
  }
}

App.PropTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  })).isRequired,
};

App.defaultProps = {
  title: "Score Board",
  players: PLAYERS,
};



export default App;
