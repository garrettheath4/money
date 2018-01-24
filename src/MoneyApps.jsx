import React, { Component } from 'react';
import PreferredApps from './PreferredApps';
import AlternativeApps from './AlternativeApps';

class MoneyApps extends Component {
  render() {
    return (
      <div className="row">
        <PreferredApps />
        <AlternativeApps />
      </div>
    );
  }
}

export default MoneyApps;
