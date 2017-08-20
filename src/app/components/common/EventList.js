import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from './EventList.c.scss';

class EventList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // the first time we load the app, we need that posts list
    this.props.dispatch({ type: "GET_EVENTS" });
  }

  // render
  render() {
    const { events } = this.props;

    // show the list of posts
    return (
      <Row>
        {events.map(event =>
          <Col md={4} className={styles.event}>
            <a className={styles.event_link} href={`http://www.facebook.com/events/${event.id}`}>
              <img src={event.cover.source} className="responsive" />
              <h3 className={styles.event_link}>
                {event.name}
              </h3>
            </a>
          </Col>,
        )}
        {!events.length &&
          <Col>
            <h3>No events</h3>
          </Col>}
      </Row>
    );
  }
}

// prop checks
EventList.propTypes = {
  dispatch: PropTypes.func,
  events: PropTypes.array,
};

// export the connected class
function mapStateToProps(state) {
  console.log("events", state.events);
  return {
    events: state.events || [],
  };
}

export default connect(mapStateToProps)(EventList);
