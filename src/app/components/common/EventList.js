import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class EventList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // the first time we load the app, we need that posts list
    this.props.dispatch({ type: 'GET_EVENTS' });
  }

  // render
  render() {
    const { events } = this.props;

    if (!events.length) {
      return <p>No events</p>;
    }

    // show the list of posts
    return (
      <Row>
        <Col xsOffset={2} xs={9}>
          {events.map(event => (
            <Col xs={4}>
              <img src={event.cover.source} />
              <h3>{event.name}</h3>
            </Col>
          ))}
          {!events.length && (
            <Col xs={12}>
              <h3>{event.name}</h3>
            </Col>
          )}
        </Col>
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
  console.log('events', state.events);
  return {
    events: state.events || [],
  };
}

export default connect(mapStateToProps)(EventList);
