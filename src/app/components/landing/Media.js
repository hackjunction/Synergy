import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';
import Mediumlist from '../common/MediumList';
import styles from './Media.c.scss';

const Media = () => (
  <Scroll.Element name="media">
    <Block className={styles.block}>
      <Row>
        <Col xs={12} className="bold text-secondary">
          <h4>WHAT IS UP?</h4>
        </Col>
      </Row>
      <BlockHeader title="THE LATEST FROM US" />
      <Row className="junction_media">
        <Col xs>
          <Mediumlist />
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default Media;
