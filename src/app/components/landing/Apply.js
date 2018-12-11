import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
//import { Link } from 'react-router-dom';
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
              <BlockHeader className={styles.title} titleStyle={styles.title} title="JUNCTION 2018">
                <span>
                  {`Junction 2018 was organized in November in Helsinki area, Finland. During one weekend, 1200 hackers from 105 nationalities came together and created over 300 new projects from scratch.`}
                </span>
              </BlockHeader>
              {/*
              <Col xs={12} md={12}>
                <Link to="/2018">
                  <button className={styles.apply_button}>LEARN MORE ABOUT JUNCTION 2018</button>
                </Link>
              </Col>
              */}
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
function mapStateToProps() {
  //console.log('tracks', state.tracks);
  return {};
}

export default connect(mapStateToProps)(Tracks);
