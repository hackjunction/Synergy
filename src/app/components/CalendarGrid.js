import React, { Component } from 'react';
import { Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Calendar.c.scss';
import CalendarEventElement from './CalendarEventElement';

class CalendarGrid extends Component {
  componentWillMount() {
    if (this.props.calendarEvents.length == 0) {
      this.props.getCalendarEvents();
    }
  }

  render() {
    const { calendarEvents, categories, limit } = this.props;

    var events = calendarEvents.filter(calendarEvent => {
      return calendarEvent.category.some(cat => {
        return categories[cat];
      });
    });
    if (limit) {
      events = events.slice(0, limit);
    }

    return (
      <div>
        <Row center="xs" height={1}>
          {events
            .filter(calendarEvent => {
              return calendarEvent.open;
            })
            .map((calendarEvent, i) => {
              return <CalendarEventElement className={styles.calendarEvent} key={i} calendarEvent={calendarEvent} />;
            })}
        </Row>

        <Row center="xs" height={1}>
          {events
            .filter(calendarEvent => {
              return !calendarEvent.open;
            })
            .map((calendarEvent, i) => {
              return <CalendarEventElement className={styles.calendarEvent} key={i} calendarEvent={calendarEvent} />;
            })}
        </Row>
      </div>
    );
  }
}

CalendarGrid.propTypes = {
  calendarEvents: PropTypes.array,
  categories: PropTypes.object,
  getCalendarEvents: PropTypes.func,
  limit: PropTypes.number
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

export default connect(mapStateToProps, mapDispatchToProps)(CalendarGrid);
