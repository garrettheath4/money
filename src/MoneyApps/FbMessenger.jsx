import React, { Component } from 'react';
import MoneyApp from './MoneyApp'

class FbMessenger extends Component {
  render() {
    return (
      <MoneyApp title="Facebook Messenger" priority="medium">
        <h4>Facebook Messenger now has secure payments built in. To send me money, <a href="http://fb.com/msg/garrettheath4">start a conversation with me</a> in Messenger and click the <code>$ Payments</code> button. You might have to click the <code>… Show More</code> button first to find the <code>$ Payments</code> button.</h4>
        <a href="https://www.messenger.com/" className="btn btn-secondary" role="button">Messenger Web App</a>
        <a href="https://itunes.apple.com/us/app/messenger/id454638411?mt=8" className="btn appstore appstore-ios">Download iOS app</a>
        <a href="https://play.google.com/store/apps/details?id=com.facebook.orca&amp;hl=en" className="btn appstore appstore-android">Download Android app</a>
      </MoneyApp>
    );
  }
}

export default FbMessenger;
