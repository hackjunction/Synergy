import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import styles from './Welcome.c.scss';
import Block from '../viewBlocks/Block';
import TopNav from '../TopNav';

const Welcome = () => (
  <Scroll.Element name="welcome" className={styles.block}>
    <TopNav />
    <video
      autoPlay
      loop
      muted
      playsInline
      poster="https://staging.hackjunction.com/wp-content/uploads/2017/08/front.jpg"
      className={styles.video}
    >
      <source
        src="https://staging.hackjunction.com/wp-content/uploads/2018/06/Junction_brandmovie.mp4"
        type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;"
      />
    </video>
    <div className={styles.videoOverlay} />
    <Block contentClassName={styles.blockContent}>
      <Row center="xs" className="junction_welcome">
        <Col xs={12} className={styles.junction_hackthefuture}>
          <div>
            <img
              src="https://staging.hackjunction.com/wp-content/uploads/2018/06/junction2018_website_logo-42-42.png"
              className={styles.junLogo}
            />
          </div>
          <h1 className={styles.h1}>
            {"EUROPE'S BIGGEST HACKATHON"}
            <br />
            23. - 25.11. 2018 <br />
          </h1>
          <br />
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default Welcome;
