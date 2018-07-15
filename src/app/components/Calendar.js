import React, { Component } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Calendar.c.scss';
import TitleMod from './TitleMod';
import CalendarEventElement from './CalendarEventElement';
import TopNav from './TopNav';

class Calendar extends Component {
  componentWillMount() {
    if (this.props.calendarEvents.length == 0) {
      this.props.getCalendarEvents();
    }
  }

  render() {
    const { calendarEvents } = this.props;
    return (
      <Grid className={styles.hero} fluid>
        <TopNav />
        <Row className={styles.background_top} center="xs">
          <TitleMod title="UPCOMING EVENTS" />
        </Row>
        <Row>
          {calendarEvents.map((calendarEvent, i) => {
            return <CalendarEventElement key={i} calendarEvent={calendarEvent} />;
          })}
        </Row>
      </Grid>
    );
  }
}

Calendar.propTypes = {
  calendarEvents: PropTypes.array,
  getCalendarEvents: PropTypes.func
};

function mapStateToProps(state) {
  return {
    getCalendarEvents: state.calendarEvents || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCalendarEvents() {
      dispatch({ type: 'GET_CALENDAR_EVENTS' });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
