import React, { Component } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Calendar.c.scss';
import TitleMod from './TitleMod';
import CalendarEventElement from './CalendarEventElement';
import TopNav from './TopNav';
import Footer from './landing/Footer';

class Calendar extends Component {
  componentWillMount() {
    if (this.props.calendarEvents.length == 0) {
      this.props.getCalendarEvents();
    }
  }

  render() {
    console.log(this.props);
    const { calendarEvents } = this.props;

    return (
      <div>
        <Grid className={styles.hero} fluid>
          <TopNav />
          <Row className={styles.background_top} center="xs">
            <TitleMod title="CALENDAR" />
          </Row>
          <Row center="xs" height={1}>
            {calendarEvents
              .filter(calendarEvent => {
                return calendarEvent.open;
              })
              .map((calendarEvent, i) => {
                return <CalendarEventElement className={styles.calendarEvent} key={i} calendarEvent={calendarEvent} />;
              })}
          </Row>
          <Row center="xs" height={1}>
            {calendarEvents
              .filter(calendarEvent => {
                return !calendarEvent.open;
              })
              .map((calendarEvent, i) => {
                return <CalendarEventElement className={styles.calendarEvent} key={i} calendarEvent={calendarEvent} />;
              })}
          </Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}

Calendar.propTypes = {
  calendarEvents: PropTypes.array,
  getCalendarEvents: PropTypes.func
};

function mapStateToProps(state) {
  return {
    calendarEvents: state.calendarEvents || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCalendarEvents() {
      dispatch({ type: 'GET_CALENDAREVENTS' });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
