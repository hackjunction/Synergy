import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import BlockHeader from './viewBlocks/BlockHeader';
import Block from './viewBlocks/Block';
import styles from './Terminal.c.scss';
import TopNav from './TopNav';
import Footer from './landing/Footer';

const Terminal = () => (
  <div>
    <TopNav />
    {/*<Block className={styles.block1}>*/}
    <div>
      <img
        src="https://staging.hackjunction.com/wp-content/uploads/2018/08/terminal_socialmedia_fb_event.png"
        className={styles.terminalImage}
        alt="Terminal logo"
      />
    </div>
    <Block className={styles.block}>
      <BlockHeader title="TERMINAL 3.0" />
      <Row className="junction_terminal">
        <Col xs={12} className={styles.parag}>
          <br />
          <br />
          Start the Junction week in an unforgettable way with Terminal! Terminal provides magnificent possibilities for
          passionate young talents to make connections with exhilarating international companies that are looking for,
          for example, developers, and meet other hackers. A four day event includes extremely fun days, learning from
          each other, having nights out in Helsinki and getting the most out of the entire Junction week! Participants
          of Terminal also have the possibility to join the Keynotes part of Hack Talks.
          <br />
        </Col>
      </Row>
    </Block>
    <Block className={styles.block}>
      <BlockHeader title="HOW CAN I JOIN" />
      <Row className="junction_terminal">
        <Col xs={12} className={styles.parag}>
          <br />
          <br />
          Participants of Terminal are chosen from amongst the participants of Junction. Apply to Terminal via the
          Junction registration platform, click that you are interested to join Terminal and fill in your answers for
          the questions. Hope to see you in November!
          <br />
        </Col>
      </Row>
    </Block>
    <Block className={styles.block1}>
      <BlockHeader title="PARTNER COMPANIES" />
      <Row>
        <Col md={6} xs={12}>
          <div className={styles.partnerCnt}>
            <img
              src="https://staging.hackjunction.com/wp-content/uploads/2018/06/logos_partners_website-12.png"
              className={styles.partnerImage}
              alt="partnerlogo1"
            />
          </div>
        </Col>
        <Col md={6} xs={12}>
          <div className={styles.partnerCnt}>
            <img
              src="https://staging.hackjunction.com/wp-content/uploads/2018/08/logos_partners_website-nextgames-22.png"
              className={styles.partnerImage}
              alt="partnerlogo2"
            />
          </div>
        </Col>
      </Row>
      <Row className="junction_terminal">
        <Col xs={12} className={styles.parag}>
          More partners announced soon!
        </Col>
      </Row>
    </Block>
    <Block className={styles.block}>
      <BlockHeader title="SCHEDULE" />
      <Row className="junction_terminal">
        <Col xs={12} className={styles.parag}>
          <br />
          Terminal starts on the 19th of November with a kick-off session and every day the specific partner company
          will host the night. There are also partner-hosted events and events to explore Helsinki during the days.
          Wednesday 21st is the last day of company hosted events and Thursday 22nd is allocated free, so participants
          and the partner companies can book one-on-one meetings in terms of recruiting and join Hack Talks Keynotes
          during the evening! On Friday 23rd we are getting ready for Junction 2018! Accurate information about the
          schedule will be completed later.
          <br />
        </Col>
      </Row>
    </Block>
    <Block className={styles.block}>
      <BlockHeader title="FOR THE PARTICIPANTS - INFO" />
      <Row className="junction_terminal">
        <Col xs={12} className={styles.parag}>
          <br />
          Welcome to Finland! Participating in Terminal means that we will provide you with accommodation together with
          other Terminal participants for the whole week! More information coming soon.
          <br />
        </Col>
      </Row>
    </Block>
    <Block className={styles.block1}>
      <BlockHeader title="FOR THE PARTNERS - INFO" />
      <Row className="junction_terminal">
        <Col xs={12} className={styles.parag}>
          <br />
          <h3> What? </h3>
          Terminal provides magnificent possibility to make connections with passionate young talents and recruit them.
          A four day event combines talented tech-interested participants of Terminal and the most fascinating partner
          companies.
          <br />
          <h3> Why? </h3>
          Partnering in Terminal provides excellent visibility and a unique chance for the partner company to meet
          excited and potential new employees. The participants chosen to Terminal are highly talented and ambitious
          young students or recently graduated ones.
          <br />
          <h3> How? </h3>
          Partners organize events to introduce their company and thoughts for the participants. On Thursday 22nd there
          is time to book one on one meetings with participants.
          <br />
          <h3> Additional info </h3>
          The amount of participants is approximately 120 persons and every partner will get one slot during day /
          evening, which means 2-4 hours for their program.
          <br />
        </Col>
      </Row>
    </Block>
    <Block className={styles.block1}>
      <BlockHeader title="CONTACT INFO" />
      <Row className="junction_terminal">
        <Col xs={12} className={styles.parag}>
          <br />
          Any questions or would like to know more?
          <br />
          <br />
          Don’t hesitate to contact: maiju.aspegren(a)hackjunction.com
          <br />
        </Col>
      </Row>
    </Block>
    <Footer />
  </div>
);

export default Terminal;
