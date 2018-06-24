import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';

import styles from './Apply.c.scss';

class Tracks extends Component {
  componentWillMount() {}
  render() {
    return (
      <Scroll.Element name="tracks">
        <Block className={styles.block}>
          <BlockHeader title="READY TO START YOUR JUNCTION JOURNEY?" />
          <Row>
            <Col xs={12} md={6} className="bold text-secondary">
              <a href="https://www.facebook.com/hackjunction">
                <button className={styles.apply_button}> GET THE LATEST UPDATES</button>
              </a>
            </Col>
            <Col>
              <img className={styles.handsImage} src="" alt="" />
            </Col>
          </Row>
        </Block>
      </Scroll.Element>
    );
  }
}

Tracks.propTypes = {};

// export the connected class
function mapStateToProps(state) {
  //console.log('tracks', state.tracks);
  return {};
}

export default connect(mapStateToProps)(Tracks);
