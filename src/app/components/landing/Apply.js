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
                Lorem ipsum dolorem sit amed ad sequitur ad nauseam alea jacta est. Veni, vidi vici.console.warn();
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
