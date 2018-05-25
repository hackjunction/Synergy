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
    <video
      autoPlay
      loop
      muted
      playsInline
      poster="https://staging.hackjunction.com/wp-content/uploads/2017/08/front.jpg"
      className={styles.video}
    >
      <source
        src="https://staging.hackjunction.com/wp-content/uploads/2017/08/vidmp4.mp4"
        type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;"
      />
      <source
        src="https://staging.hackjunction.com/wp-content/uploads/2017/08/vidwebm.webm"
        type="video/webm; codecs=&quot;vp8, vorbis&quot;"
      />
    </video>
    <div className={styles.videoOverlay} />
    <Block contentClassName={styles.blockContent}>
      <Row center="xs" className="junction_welcome">
        <Col xs={12} className={styles.junction_hackthefuture}>
          <h1>
            {" EUROPE'S BIGGEST HACKATHON "} <br />
            <br />
            <div className={styles.rotating_text}>
              <ReactRotatingText
                color="#35E2DF"
                items={['1500 HACKERS', '96 NATIONALITIES', '60+ PARTNER COMPANIES', '20.000€ MAIN PRIZE']}
              />
            </div>
          </h1>
          <br />
          <h2 className={styles.event_dates}>Thank you for 2017 and see you soon!</h2>
          <button
            className={styles.apply_button}
            onClick={() => {
              var mailchimpConfig = {
                baseUrl: 'mc.us15.list-manage.com',
                uuid: '6dd99fd74845dfb3f1307127a',
                lid: '292fbaaccd'
              };
              // No edits below this line are required
              var chimpPopup = document.createElement('script');
              chimpPopup.appendChild(
                document.createTextNode(
                  'require(["mojo/signup-forms/Loader"], function (L) { L.start({"baseUrl": "' +
                    mailchimpConfig.baseUrl +
                    '", "uuid": "' +
                    mailchimpConfig.uuid +
                    '", "lid": "' +
                    mailchimpConfig.lid +
                    '"})});document.cookie = "MCPopupClosed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;";'
                )
              );

              document.body.appendChild(chimpPopup);
            }}
          >
            {' '}
            GET THE LATEST UPDATES
          </button>
        </Col>
        <Col xs={1} className="junction_welcome_bottom">
          <Scroll.Link to="about" smooth duration={500}>
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
