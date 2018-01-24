import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';
import MoneyHeader from './MoneyHeader';
import MoneyApps from './MoneyApps';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Profile />
        <MoneyHeader />
        <MoneyApps />
      </div>
    );
  }
}

export default App;
