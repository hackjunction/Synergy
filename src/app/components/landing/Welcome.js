import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import ReactRotatingText from 'react-rotating-text';
import styles from './Welcome.c.scss';
import Block from '../viewBlocks/Block';
import TopNav from '../TopNav';

const Welcome = () => (
  <Scroll.Element name="welcome" className={styles.block}>
    <TopNav />
    <Block contentClassName={styles.blockContent}>
      <Row center="xs" className="junction_welcome">
        <Col xs={12} className={styles.junction_hackthefuture}>
          <h1>
            {" EUROPE'S BIGGEST HACKATHON "} <br />
            <br />
            <div className={styles.rotating_text}>
              <ReactRotatingText
                color="#35E2DF"
                items={[
                  '1300 HACKERS',
                  '80 NATIONALITIES',
                  '60+ PARTNER COMPANIES',
                  '20.000€ MAIN PRIZE',
                ]}
              />
            </div>
          </h1>
          <br />
          <h2 className={styles.event_dates}>24-26 November - Helsinki</h2>
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
