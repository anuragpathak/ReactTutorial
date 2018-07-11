import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React - Session - 2</h1>
                </header>
                <p className="App-intro">
                    <div> Prop 1: <span></span>{this.props.prop1}</div> 
                    <div> Prop 2: <span></span>{this.props.prop2}</div>  
                </p>
            </div>
        );
    }
}

export default App;
