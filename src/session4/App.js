import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React - Session - 4</h1>
                </header>
                <p className="App-intro">
                    <button onClick={() => this.setState({value: (new Date().toString())})}>
                        {this.props.label}
                    </button>
                    <div>{this.state.value}</div>
                </p>
            </div>
        );
    }
}

export default App;
