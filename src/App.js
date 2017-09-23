import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';


var PLAYERS = [
  {
    name: "Steve Kulesza",
    score: 31,
    id: 1,
  },
  {
    name: "Hank Pratt",
    score: 66,
    id: 2,
  },
  {
    name: "Ben Jordan",
    score: 69,
    id: 3,
  }
];

class Header extends React.Component {
  PropTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

class Counter extends React.Component {
  PropTypes = {}

  constructor(props) {
    super(props);
    this.state = {score: 0};
    this.incrementScore = this.incrementScore.bind(this);
  }

  incrementScore(e) {
    console.log('incrementScore', e);
  }

  render() {
    return(
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <div className="counter-score"> {this.state.score} </div>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

class Player extends React.Component {
  PropTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="players">
        <div className="player">
          <div className="player-name">
            {this.props.name}
          </div>
          <div className="player-score">
            <Counter />
          </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  PropTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} />

        <div className="players">
          {this.props.players.map(function(player) {
            return <Player name={player.name} score={player.score} key={player.id} />
          })}
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  title: "Score Board",
  players: PLAYERS,
};



export default App;
