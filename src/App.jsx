import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';
import MoneyHeader from './MoneyHeader';
import MoneyApps from './MoneyApps';
import * as classNames from 'classnames';

class App extends Component {
  render() {
    return (
      <div className={classNames("App", "container")}>
        <Profile />
        <MoneyHeader />
        <MoneyApps />
      </div>
    );
  }
}

export default App;
