import React, { Component } from 'react';
import './MoneyApp.css';
import './AppStore/AppStore.css';
import * as classNames from 'classnames';

class MoneyApp extends Component {
  constructor(props) {
    super(props);
    var priority = 'medium';
    if ('priority' in props && isValidPriority(props.priority)) {
      priority = toValidPriority(props.priority);
    }
    this.state = {
      priority: priority,
    };
  }

  render() {
    return (
      <div className={priority2bsCardClass(this.state.priority)}>
        <div className="card-header">
          <h3 className="card-title">{this.props.title}</h3>
        </div>
        <div className="card-block">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export const PRIORITIES = ['low', 'medium', 'high'];
const PRIORITY_COLORS = {
  'low': 'muted',
  'medium': 'info',
  'high': 'primary',
};

function arrayContains(ary, item) {
  return ary.indexOf(item) > -1;
}

function isValidPriority(priority) {
  const priorityClean = priority.trim().toLowerCase();
  return arrayContains(['low', 'medium', 'high'], priorityClean);
}

function toValidPriority(priority) {
  const priorityClean = priority.trim().toLowerCase();
  if (isValidPriority(priorityClean)) {
    return priorityClean;
  } else {
    return 'medium';
  }
}

function priority2bsColor(priority) {
  if (!isValidPriority(priority)) {
    return 'info';
  }
  const priorityValid = toValidPriority(priority);
  return PRIORITY_COLORS[priorityValid];
}

function priority2bsCardClass(priority) {
  return classNames("card", "card-" + priority2bsColor(priority), "MoneyApp");
}

export default MoneyApp;
