import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { scroller, Element as ScrollElement } from 'react-scroll';
import styles from './Calendar.c.scss';

// import Challenge from './challenges/Challenge';

class CalendarEventElement extends Component {
  render() {
    var calendarEvent = this.props.calendarEvent;
    var toggle = function() {
      this.props.toggleEvent(calendarEvent.id);
      setTimeout(() => {
        scroller.scrollTo(calendarEvent.slug, {
          duration: 500,
          delay: 100,
          smooth: true
        });
      }, 1000);
    }.bind(this);
    var style = {};
    console.log('event:', calendarEvent);
    if (calendarEvent.background_image) {
      style = {
        backgroundImage: `url(${calendarEvent.background_image})`
      };
    }
    console.log('style:', style);
    return calendarEvent.open ? (
      <Col xs={12} md={12} className={styles.open_container}>
        <ScrollElement name={calendarEvent.slug} />
        <Row center="xs">
          <h1>{calendarEvent.title}</h1>
        </Row>
        <Row center="xs">
          <div className={styles.text_content} dangerouslySetInnerHTML={{ __html: calendarEvent.content.rendered }} />
        </Row>
        <Row center="xs">
          {calendarEvent.link ? <Col className={styles.link}>EVENT</Col> : null}
          {calendarEvent.link ? <Col className={styles.link}>READ MORE</Col> : null}
        </Row>
        <Row center="xs" onClick={toggle} className={styles.arrow}>
          <div className="fa fa-chevron-up" />
        </Row>
      </Col>
    ) : (
      <Col xs={12} md={4} onClick={toggle}>
        <ScrollElement name={calendarEvent.slug} />
        <div className={`responsive ${styles.trackCell}`} style={style}>
          <div className={styles.awesome_overlay}>
            <div className={styles.inside}>{<h2>{calendarEvent.title}</h2>}</div>
          </div>
        </div>
      </Col>
    );
  }
}

CalendarEventElement.propTypes = {
  calendarEvent: PropTypes.object,
  toggleEvent: PropTypes.func
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    toggleEvent(id) {
      dispatch({ type: 'CALENDAREVENT_TOGGLE', id });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarEventElement);
