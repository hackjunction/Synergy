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
          <Col xs={12} sm={12} md={4} lg={4} className={styles.event}>
            <a href={`http://www.facebook.com/events/${event.id}`}>
              <img src={event.cover.source} className="responsive" />
            </a>
              <h3 className={styles.event_link}>
                {event.name}
              </h3>
              <p className={styles.event_link}><a href={`http://www.facebook.com/events/${event.id}`}>Attend</a></p>
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
