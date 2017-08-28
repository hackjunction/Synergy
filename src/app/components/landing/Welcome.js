import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import ReactRotatingText from 'react-rotating-text';
import styles from './Welcome.c.scss';
import Block from '../viewBlocks/Block';

const Welcome = () =>
  <Scroll.Element name="welcome">
    <Block className={styles.block} contentClassName={styles.blockContent}>
      <div className={styles.fullscreen_bg}>
        <video loop autoPlay poster="https://staging.hackjunction.com/wp-content/uploads/2017/08/front.jpg" className={styles.fullscreen_bg__video}>
          <source src="https://staging.hackjunction.com/wp-content/uploads/2017/08/vidwebm.webm" type="video/webm" />
          <source src="https://staging.hackjunction.com/wp-content/uploads/2017/08/vidmp4.mp4" type="video/mp4" />
        </video>
      </div>
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
              color="#35E2DF"
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
          <h2>24-26 November - Helsinki</h2>
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
  </Scroll.Element>;

export default Welcome;
