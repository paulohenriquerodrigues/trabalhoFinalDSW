import React, { Component } from 'react';
import { Button } from 'react';
import { Media } from 'react';
import home from './home.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={home} className="btn btn-secondary float-left"/>
            <h1 className="App-title">Droneseta</h1>
        </header>
      </div>
    );
  }
}

export default App;
