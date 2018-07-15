import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Calendar.c.scss';
// import Challenge from './challenges/Challenge';

class CalendarEventElement extends Component {
  render() {
    var calendarEvent = this.props.CalendarEvent;
    return <div key={calendarEvent.id} />;
  }
}

CalendarEventElement.propTypes = {
  CalendarEvent: PropTypes.object
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarEventElement);
