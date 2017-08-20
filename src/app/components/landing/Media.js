import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styles from './Media.c.scss';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';
import Mediumlist from '../common/MediumList';

const Media = () =>
  <Block className={styles.block}>
    <Row>
      <Col xs={12} className="bold text-secondary">
        <h4>MEDIA</h4>
      </Col>
    </Row>
    <BlockHeader title="STAY UP TO DATE WITH US">
      <p>
        We often share our wisdom, from our path to build this amazing
        Hackathon. Be part of the conversation and learn first all the
        intriguing doings of Junction.
      </p>
    </BlockHeader>
    <Row className="junction_media">
      <Col xs>
        <Mediumlist />
      </Col>
    </Row>
  </Block>;

export default Media;
