import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import styles from './Media.c.scss';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';
import Mediumlist from '../common/MediumList';

const Media = () =>
  <Scroll.Element name="media">
    <Block className={styles.block}>
      <Row>
        <Col xs={12} className="bold text-secondary">
          <h4>MEDIA</h4>
        </Col>
      </Row>
      <BlockHeader title="WHAT ARE WE UP TO?">
        <p>
          Keep up with the latest from us!
        </p>
      </BlockHeader>
      <Row className="junction_media">
        <Col xs>
          <Mediumlist />
        </Col>
      </Row>
    </Block>
  </Scroll.Element>;

export default Media;
