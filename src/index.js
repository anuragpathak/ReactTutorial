import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './session4/App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<App prop1="test1" prop2="test2"/>, document.getElementById('root'));
// ReactDOM.render(<App label="Click Me" />, document.getElementById('root'));
ReactDOM.render(<App label="Update Time" />, document.getElementById('root'));
registerServiceWorker();
