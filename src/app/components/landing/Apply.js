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
        <Block className={styles.block} contentClassName={styles.block}>
          <Row>
            <Col xs={12} md={6} className={styles.text_section}>
              <BlockHeader className={styles.title} title="READY TO START YOUR JUNCTION JOURNEY?">
                {
                  'Winter is coming – and so is Junction 2018! This November Europe’s biggest hackathon will be even bigger and better in Helsinki, Finland. Applications will be launched soon, get ready!'
                }
              </BlockHeader>
              <a href="https://www.facebook.com/hackjunction">
                <button className={styles.apply_button}> GET THE LATEST UPDATES</button>
              </a>
            </Col>
            <Col
              xs={12}
              md={6}
              style={{
                'background-image':
                  'url(https://staging.hackjunction.com/wp-content/uploads/2018/06/junction2018_website_hands-01.svg)',
                'background-size': 'auto 100%',
                'background-repeat': 'no-repeat'
              }}
            />
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
