import React from 'react';
import ReactPlayer from 'react-player';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import CalendarGrid from './CalendarGrid';
import BlockHeader from './viewBlocks/BlockHeader';
import styles from './About.c.scss';
import Block from './viewBlocks/Block';
import TopNav from './TopNav';
import TitleMod from './TitleMod';
import Footer from './landing/Footer';

const About = () => (
  <div>
    <TopNav />
    <Row className={styles.background_top} center="xs">
      <TitleMod title="WHAT IS JUNCTION" />
    </Row>
    <Block className={styles.block} contentClassName={styles.content}>
      <Row center="xs" className={styles.community}>
        <Col xs={6} md={4}>
          <p className={styles.number}>3</p>
          <p>Years</p>
        </Col>
        <Col xs={6} md={4}>
          <p className={styles.number}>14</p>
          <p>Countries</p>
        </Col>
        <Col xs={6} md={4}>
          <p className={styles.number}>103</p>
          <p>Nationalities</p>
        </Col>
        <Col xs={6} md={4}>
          <p className={styles.number}>162</p>
          <p>Partners</p>
        </Col>
        <Col xs={6} md={4}>
          <p className={styles.number}>1049</p>
          <p>Volunteers</p>
        </Col>
        <Col xs={6} md={4}>
          <p className={styles.number}>1102</p>
          <p>New ideas into reality</p>
        </Col>
      </Row>
      <Row className={styles.bottomRow} center="xs">
        <Col xs={12} md={12}>
          <span className={styles.number}> Over 5000 </span>
          <br />participants in total
        </Col>
      </Row>
    </Block>
    <Block className={styles.dark_block}>
      <BlockHeader title="Junction from previous years" />
      <Row className={styles.video} center="xs">
        <ReactPlayer url="https://www.youtube.com/watch?v=G5GOb9Ea5z0" className={styles.video} />
      </Row>
    </Block>
    <Block className={styles.block}>
      <BlockHeader title="NEXT UP" />
      <Col>
        <CalendarGrid categories={{ hacktour: true, junctionx: true, techrace: true, hacktalks: true }} limit={3} />
      </Col>
      <Row center="xs">
        <Col xs={12} md={12}>
          <Link to="/calendar">
            <button className={styles.apply_button}>SEE FULL CALENDAR</button>
          </Link>
        </Col>
      </Row>
    </Block>
    <Footer />
  </div>
);

export default About;
