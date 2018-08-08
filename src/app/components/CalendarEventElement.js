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
    console.log('calendarEvent:', calendarEvent);
    var link1 = calendarEvent.link_1 ? (
      <Col xs={12} md={4}>
        <a href={calendarEvent.link_1}>
          <button className={styles.apply_button}>{calendarEvent.link_1_text}</button>
        </a>
      </Col>
    ) : null;
    var link2 = calendarEvent.link_2 ? (
      <Col xs={12} md={4}>
        <a href={calendarEvent.link_2}>
          <button className={styles.apply_button}>{calendarEvent.link_2_text}</button>
        </a>
      </Col>
    ) : null;
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
          {link1}
          {link2}
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
