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
    <Block className={`${styles.block} ${styles.infotext}`}>
      <Col xs={12} className={styles.parag}>
        This is us in a nutshell: We bring together developers, designers and other tech-minded people to solve
        intriguing challenges. In order to offer them the most pressing problems, we partner with roughly 60 companies
        yearly. We believe that technology is a powerful tool when used right, and everybody should have the possibility
        to build meaningful things with it. What started as a single hackathon in Helsinki, Finland, has now started a
        movement of tech events all around the world. In early 2018, we launched JUNCTIONx – the possibility to join the
        Junction community, utilize Junction’s brand and some of its muscles for your own event. In its first year,
        JUNCTIONx’s were organized in 5 countries: China, Japan, Saudi Arabia, Hungary and Vietnam.
        <br />
        <br />
        All of our JUNCTIONx-event are co-hosted together with local tech hubs and passionate individuals. Check out our
        calendar to get to know all that is going on in Junction!  The event filled year peaks annually with our
        flagship event, Junction, held in Finland with around 1500 developers and designers in attendance every year.
        Want to learn more from us? Drop us a line at <span className={styles.highlight}>
          hello@hackjunction.com
        </span>{' '}
        and we will gladly tell you more!
      </Col>
    </Block>
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
