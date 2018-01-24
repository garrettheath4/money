import React, { Component } from 'react';
import SquareMobile from './MoneyApps/SquareMobile';
import SquareWeb from './MoneyApps/SquareWeb';

class PreferredApps extends Component {
  render() {
    return (
      <div className="col-sm-6">
        <SquareMobile />
        <SquareWeb />
      </div>
    );
  }
}

export default PreferredApps;
