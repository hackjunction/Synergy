import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import styles from './About.c.scss';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';

const About = () => (
  <Scroll.Element name="about">
    <Block className={styles.block}>
      <BlockHeader title="ABOUT" />
      <Row className="junction_about">
        <Col xs={12} className="junction-description">
          {'Junction is Europe’s biggest hackathon and a global community of hackers.'}
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default About;
