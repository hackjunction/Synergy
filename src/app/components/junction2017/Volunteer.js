import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';
import styles from './Volunteer.c.scss';
import TopNav from '../TopNav';

const Media = () =>
  <Scroll.Element name="junction 2017">
    <TopNav />
    <Block className={styles.block}>
      <Row>
        <Col xs={12} className="bold text-secondary">
          <h4>COMMUNITY</h4>
        </Col>
      </Row>
      <BlockHeader title="WANT TO BUILD JUNCTION WITH US?">
        <p>
          Junction could not exist without our year-round volunteer team, which grows up to 300 people closer to the main event. Our volunteer applications are now open, join the family!
        </p>
        <a href="/volunteer">
          <button className={styles.volunteer_button}>VOLUNTEER</button>
        </a>
      </BlockHeader>
    </Block>
  </Scroll.Element>;

export default Media;
