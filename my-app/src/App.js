import React, { Component } from 'react';
import logo from './devlogo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Here is my Assessment iii</h1>
        </header>
        <p className="App-intro">
          This was a cool little project and I am excited to get started with DevMountain next week!
        </p>
      </div>
    );
  }
}

export default App;
