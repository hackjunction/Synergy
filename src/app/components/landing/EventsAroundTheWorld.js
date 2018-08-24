import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';
import CalendarGrid from '../CalendarGrid';

import styles from './EventsAroundTheWorld.c.scss';

class EventsAroundTheWorld extends Component {
  componentWillMount() {
    // the first time we load the app, we need that tracks list
    //this.props.dispatch({ type: 'GET_TRACKS' });
  }
  render() {
    return (
      <Scroll.Element name="events_around_the_world">
        <Block className={styles.block}>
          <BlockHeader title="EVENTS ALL AROUND THE WORLD" />
          <CalendarGrid categories={{ junctionx: true, hacktour: true, techrace: true }} />
          <Row center="xs">
            <Col xs={12} md={12}>
              <Link to="/calendar">
                <button className={styles.apply_button}>SEE FULL CALENDAR</button>
              </Link>
            </Col>
          </Row>
        </Block>
      </Scroll.Element>
    );
  }
}

EventsAroundTheWorld.propTypes = {};

// export the connected class
function mapStateToProps() {
  //console.log('tracks', state.tracks);
  return {};
}

export default connect(mapStateToProps)(EventsAroundTheWorld);
