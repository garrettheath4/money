import React, { Component } from 'react';
import Venmo from './MoneyApps/Venmo';
import FbMessenger from './MoneyApps/FbMessenger';

class AlternativeApps extends Component {
  render() {
    return (
      <div className="col-sm-6">
        <Venmo />
        <FbMessenger />
      </div>
    );
  }
}

export default AlternativeApps;
