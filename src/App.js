import React, { Component } from 'react';
import logo from './home.jpg';
import './App.css';
import AutoComplete from "./AutoComplete";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo}  alt="logo" />
          <h1>Home Value</h1>
        </header>
        <AutoComplete />
      </div>
    );
  }
}

export default App;
