import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import ReactRotatingText from 'react-rotating-text';
import styles from './Welcome.c.scss';
import Block from '../viewBlocks/Block';
import TopNav from '../TopNav';

const Welcome = () => (
<<<<<<< HEAD
  <Scroll.Element name="welcome" className={styles.block}>
    <TopNav />
    <Row center="xs">
      <Col>
        <a
          className={styles.mlh}
          href="https://mlh.io/seasons/na-2018/events?utm_source=na-2018&utm_medium=TrustBadge&utm_campaign=na-2018&utm_content=gray"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2018/gray.svg"
            alt="Major League Hacking 2017 Hackathon Season"
          />
        </a>
      </Col>
    </Row>
    <Block contentClassName={styles.blockContent}>
=======
  <Scroll.Element name="welcome">
    <Block className={styles.block} contentClassName={styles.blockContent}>
      <TopNav />
>>>>>>> 85fae86084369dc2374d2a557c1419909e6cd1c0
      <Row center="xs" className="junction_welcome">
        <Col xs={12} className={styles.junction_hackthefuture}>
          <h1>
            HACK THE FUTURE OF <br />
            <br />
            <div className={styles.rotating_text}>
              <ReactRotatingText
                color="#35E2DF"
                items={[
                  'GAMING',
                  'INTELLIGENT BUILDINGS',
                  'HEALTHTECH',
                  'LOGISTICS',
                  'ENTERTAINMENT',
                  'MOBILITY',
                  'INDUSTRIAL INTERNET',
                  'FINTECH',
                ]}
              />
            </div>
          </h1>
          <br />
          <h2>24-26 November - Helsinki</h2>
          <a href="https://register.hackjunction.com/">
            <button className={styles.apply_button}>APPLY</button>
          </a>
        </Col>
        <Col xs={1} className="junction_welcome_bottom">
          <Scroll.Link to="about" smooth={true} duration={500}>
            <div className={styles.arrow}>
              <ul>
                <li />
                <li />
              </ul>
            </div>
          </Scroll.Link>
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default Welcome;
