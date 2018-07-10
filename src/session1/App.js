import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';

class App extends Component {
    render() {

        return React.createElement('div', {className: 'App'},
            React.createElement('header', {className: 'App-header'},
                React.createElement('img', {src: logo, className: 'App-logo', alt: 'logo'}),
                React.createElement('h1', {className: 'App-title'}, 'Welcome to React - Session 1')),
            React.createElement('p', {className: 'App-intro'}, 'Test From Session 1'));
      
        // return (
        //     <div className="App">
        //         <header className="App-header">
        //             <img src={logo} className="App-logo" alt="logo" />
        //             <h1 className="App-title">Welcome to React - Session 1</h1>
        //         </header>
        //         <p className="App-intro">
        //             Test From Session 1
        //         </p>
        //     </div>
        // );
    }
}

export default App;
