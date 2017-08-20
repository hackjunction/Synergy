import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
          <Col md={4}>
            <img src={event.cover.source} className="responsive" />
            <h3>
              {event.name}
            </h3>
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
