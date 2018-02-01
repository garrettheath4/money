import React, { Component } from 'react';
import './AppStore.css';
import * as classNames from 'classnames';

class AndroidButton extends Component {
  constructor(props) {
    super(props);
    var link = '#';
    if ('href' in props) {
      link = props.href;
    }
    this.state = {
      href: link,
    };
  }

  render() {
    return (
      <a href={this.state.href} className={classNames("appstore", "appstore-android")}>
        <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="Download on the Google Play Store" align="middle"/>
      </a>
    );
  }
}

export default AndroidButton;
