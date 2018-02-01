import React, { Component } from 'react';
import './AppStore.css';
import * as classNames from 'classnames';

class AppleButton extends Component {
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
      <a href={this.state.href} className={classNames("appstore", "appstore-ios")}>
        <img src="https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/appstore-lrg.svg" alt="Get it on Google Play"/>
      </a>
    );
  }
}

export default AppleButton;
