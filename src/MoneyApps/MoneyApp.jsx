import React, { Component } from 'react';
import './MoneyApp.css';
import './AppStore/AppStore.css';

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
  switch (priorityValid) {
    case 'high':
      return 'primary';
    case 'low':
      return 'muted';
    case 'medium':
    default:
      return 'info';
  }
}

function priority2bsCardClass(priority) {
  return "card card-" + priority2bsColor(priority) + " MoneyApp";
}

export default MoneyApp;
