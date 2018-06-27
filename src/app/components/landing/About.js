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
        <Col xs={12} className={styles.numbers}>
          <span className="text-secondary">3</span> years<br />
          <span className="text-secondary">14</span> countries<br />
          <span className="text-secondary">103</span> nationalities <br />
          <span className="text-secondary">162</span> partners<br />
          <span className="text-secondary">1049</span> volunteers<br />
          <span className="text-secondary">1102</span> new ideas into reality<br />
          Over <span className="text-secondary">5000</span> participants in total<br />
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default About;
