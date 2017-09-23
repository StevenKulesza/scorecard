import React from 'react';
import './App.css';

function Application(props) {
  return (
    <div className="scoreboard">
      <div className="header">
        <h1>{props.title}</h1>
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

export default Application;
