import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Application title="My Scoreboard" />, document.getElementById('root'));
registerServiceWorker();
