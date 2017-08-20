import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scrollchor from 'react-scrollchor';
import ReactRotatingText from 'react-rotating-text';
import styles from './Welcome.c.scss';
import Block from '../viewBlocks/Block';

const Welcome = () =>
  <Block className={styles.block} contentClassName={styles.blockContent}>
    <Row center="xs">
      <Col>
        <img
          className="junction_logo"
          src="https://staging.hackjunction.com/wp-content/uploads/2017/08/junction_logo-1.png"
        />
      </Col>
    </Row>
    <Row center="xs" className="junction_welcome">
      <Col xs={12} className={styles.junction_hackthefuture}>
        <h1>
          HACK THE FUTURE OF <br />
          <br />
          <ReactRotatingText
            color="#5abecf"
            items={[
              'HEALTHTECH',
              'LOGISTICS',
              'ENTERTAINMENT',
              'MULTIMODAL MOBILITY',
              'INDUSTRIAL INTERNET',
              'FINTECH',
            ]}
          />
        </h1>
        <br />
        <h2>27-29 November - Helsinki</h2>
      </Col>
      <Col xs={1} className="junction_welcome_bottom">
        <Scrollchor to="#about">
          <div className={styles.arrow}>
            <ul>
              <li />
              <li />
            </ul>
          </div>
        </Scrollchor>
      </Col>
    </Row>
  </Block>;

export default Welcome;
