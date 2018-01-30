import React, { Component } from 'react';
import MoneyApp from './MoneyApp'

class Venmo extends Component {
  render() {
    return (
      <MoneyApp title="Venmo App" priority="medium">
        <h4>If you don't have the Square Cash app and you use <a href="https://venmo.com/about/product/">Venmo</a> instead, send it to my Venmo username:
          <a href="https://venmo.com/garrettheath4"><code>@garrettheath4</code></a>.
        </h4>
        <a href="https://venmo.com/garrettheath4" className="btn btn-secondary venmo-link" role="button">
          <span className="dollars-unknown show">Send me money with Venmo</span>
          <span className="dollars-known hide" hidden>Send me $<span className="dollars-known-amount"></span> with Venmo</span>
        </a>
        <a href="https://itunes.apple.com/us/app/venmo/id351727428?mt=8" className="btn appstore appstore-ios">Download iOS app</a>
        <a href="https://play.google.com/store/apps/details?id=com.venmo" className="btn appstore appstore-android">Download Android app</a>
      </MoneyApp>
    );
  }
}

export default Venmo;
