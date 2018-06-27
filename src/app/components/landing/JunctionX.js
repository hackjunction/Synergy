import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';
import styles from './JunctionX.c.scss';
import Block from '../viewBlocks/Block';

const JunctionX = () => (
  <Scroll.Element name="about">
    <Block className={styles.block}>
      <Row center="xs">
        <Col xs={8} md={4}>
          <img
            className={styles.logo}
            src="https://staging.hackjunction.com/wp-content/uploads/2018/06/junctionx_globe.png"
            alt=""
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h1>HACK THE GLOBE</h1>
          <p>
            {
              'JUNCTIONx is the entry point on your path to creating your own hackathon. We want people to join our community and to empower more people to use technology as a tool to solve problems and face challenges.'
            }
          </p>
          <Link to="/junctionx">
            <button className={styles.apply_button}>MORE ABOUT JUNCTIONx</button>
          </Link>
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default JunctionX;
