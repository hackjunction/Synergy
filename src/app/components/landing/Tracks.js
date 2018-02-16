import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import ElementGrid from '../common/ElementGrid';
import TrackElement from '../common/TrackElement';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';

import styles from './Tracks.c.scss';

class Tracks extends Component {
  componentWillMount() {
    // the first time we load the app, we need that tracks list
    this.props.dispatch({ type: 'GET_TRACKS' });
  }
  render() {
    var grid = [[4, 4, 4], [6, 6], [4, 4, 4], [6, 6], [4, 4, 4]];
    var i = 0;

    return (
      <Scroll.Element name="tracks">
        <Block className={styles.block}>
          <Row>
            <Col xs={12} className="bold text-secondary">
              <h4>TRACKS FROM LAST YEAR</h4>
            </Col>
          </Row>
          <BlockHeader title="BUILDING FOR TOMORROW">
            <p>
              Junction 2017 was divided into multiple tracks, each including
              several challenges set by our amazing partners. The best project
              was awarded with the main prize of{" "}
              <span className={styles.text_highlight}>20k€</span>.
            </p>
          </BlockHeader>
          <ElementGrid
            grid={[[4, 4, 4], [6, 6], [4, 4, 4], [6, 6], [4, 4, 4]]}
            elements= {this.props.tracks.map((track, i) => <TrackElement key={i} post={track} /> )}
          />
        </Block>
      </Scroll.Element>
    );
  }
}

Tracks.propTypes = {
  dispatch: PropTypes.func,
  tracks: PropTypes.array
};

// export the connected class
function mapStateToProps(state) {
  //console.log('tracks', state.tracks);
  return {
    tracks: state.tracks || []
  };
}

export default connect(mapStateToProps)(Tracks);
