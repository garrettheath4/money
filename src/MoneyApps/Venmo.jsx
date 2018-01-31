import React, { Component } from 'react';
import MoneyApp from './MoneyApp';
import AppleButton from './AppStore/AppleButton';
import AndroidButton from './AppStore/AndroidButton';

class Venmo extends Component {
  render() {
    return (
      <MoneyApp title="Venmo App" priority="low">
        <p>If you don't have the Square Cash app and you use <a href="https://venmo.com/about/product/">Venmo</a> instead, send it to my Venmo username: <a href="https://venmo.com/garrettheath4"><code>@garrettheath4</code></a>.</p>
        <div>
          <a href="https://venmo.com/garrettheath4" className="btn btn-secondary venmo-link" role="button">
            <span className="dollars-unknown show">Launch Venmo</span>
            <span className="dollars-known hide" hidden>Venmo $<span className="dollars-known-amount"></span></span>
          </a>
        </div>
        <div>
          <AppleButton href="https://itunes.apple.com/us/app/venmo/id351727428?mt=8"/>
          <AndroidButton href="https://play.google.com/store/apps/details?id=com.venmo"/>
        </div>
      </MoneyApp>
    );
  }
}

export default Venmo;
