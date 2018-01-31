import React, { Component } from 'react';
import MoneyApp from './MoneyApp';
import AppleButton from './AppStore/AppleButton';
import AndroidButton from './AppStore/AndroidButton';

class SquareMobile extends Component {
  render() {
    return (
      <MoneyApp title="Square Cash App" priority="high">
        <p>Use the <a href="https://cash.me/">Square Cash</a> app and send money to my $Cashtag: <a className="cashtag-link" href="https://cash.me/$garrettheath4"><code>$garrettheath4</code></a>.
        This is my preferred way to send and receive money.</p>
        <div>
          <a href="https://cash.me/$garrettheath4" className="btn btn-secondary cashtag-link" role="button"><code>$garretttheath4</code></a>
        </div>
        <div>
          <AppleButton href="https://cash.me/app/KDCNDTC"/>
          <AndroidButton href="https://cash.me/app/KDCNDTC"/>
        </div>
        <p>If you haven't signed up to use the Square Cash app before, you can use this referral code when you sign up and we'll both get $10: <a href="https://cash.me/app/KDCNDTC"><code>KDCNDTC</code></a></p>
      </MoneyApp>
    );
  }
}

export default SquareMobile;
