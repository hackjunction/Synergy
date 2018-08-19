import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';
import Block from '../viewBlocks/Block';
import styles from './Join.c.scss';

const Join = () => (
  <Scroll.Element name="volunteer">
    <Block center="xs" className={styles.block} contentClassName={styles.block}>
      <h1>
        <div className={styles.title}>JOIN</div>
      </h1>
      <Row center="xs">
        <Col xs={12} md={4}>
          <Link to="/participate">
            <button className={styles.apply_button}>PARTICIPATE</button>
          </Link>
        </Col>
        <Col xs={12} md={4}>
          <Link to="/volunteer">
            <button className={styles.apply_button}>VOLUNTEER</button>
          </Link>
        </Col>
        <Col xs={12} md={4}>
          <Link to="/partners">
            <button className={styles.apply_button}>PARTNER</button>
          </Link>
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default Join;
