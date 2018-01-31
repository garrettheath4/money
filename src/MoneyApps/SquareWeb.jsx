import React, { Component } from 'react';
import MoneyApp from './MoneyApp';

class SquareWeb extends Component {
  render() {
    return (
      <MoneyApp title="Square Cash Website" priority="medium">
        <p>If you don't want to sign up for a cash app, use this webpage to send me money using your debit card.
        Payments are sent <a href="https://cash.me/security">securely</a> by Square Cash.</p>
        <div>
          <a href="https://cash.me/$garrettheath4" className="btn btn-secondary cashtag-link" role="button">
            <span className="dollars-unknown show">Launch Square Cash website</span>
            <span className="dollars-known hide" hidden>Send $<span className="dollars-known-amount"></span></span>
          </a>
        </div>
      </MoneyApp>
    );
  }
}

export default SquareWeb;
