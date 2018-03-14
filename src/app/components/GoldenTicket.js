import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styles from './GoldenTicket.c.scss';
import Block from './viewBlocks/Block';

const GoldenTicket = () => (
  <div>
    <Row className={styles.background_top} center="xs" />
    <Block className={styles.block}>
      <Row className={styles.title}>
        <h2>
          <span>Golden Ticket grants you</span>
        </h2>
      </Row>
      <Row className={styles.community}>
        <Col md={4} xs={12} />
        <Col md={4} xs={12} />
        <Col md={4} xs={12} />
      </Row>
      <Row className={styles.title}>
        <h2>
          <span>Confirm your Golden Ticket</span>
        </h2>
      </Row>
      <Row className={styles.title}>
        <h2>
          <span>Hackathon organiser?</span>
        </h2>
      </Row>
    </Block>
  </div>
);

export default GoldenTicket;
