import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import BlockHeader from './viewBlocks/BlockHeader';
import Block from './viewBlocks/Block';
import styles from './Techrace.c.scss';
import TopNav from './TopNav';
import Footer from './landing/Footer';

const Terminal = () => (
  <div>
    <TopNav />
    <div>
      <img
        src="https://staging.hackjunction.com/wp-content/uploads/2018/08/techrace-event-banner-01.png"
        className={styles.techRaceImage}
        alt="TechRace Banner"
      />
    </div>
    <Block className={styles.block}>
      <BlockHeader title="WHY?" />
      <Row>
        <Col xs={12}>
          TechRace is the Junction pre-event tour in Finland. Every TechRace participant will get a secret code and a
          huge advantage when applying to Junction 2018!
          <br />
          <br />
          Get into the hackathon spirit with TechRace events.
          <br />
          <br />
        </Col>
      </Row>
      <BlockHeader title="WHAT?" />
      <Row className="junction_terminal">
        <Col xs={12}>
          TechRace tours through nine cities to find the top concentration of tech masterminds in Finland. In every
          event, the local participants will receive a large pool of challenges to solve, ranging from programming
          puzzles to design problems, from basic tasks to extremely problematic ones. The winning city, “the techiest of
          them all”, is chosen based on the total points all participants earn during the local TechRace event. So,
          gather your local tech community together and get ready to race against other cities!
          <br />
        </Col>
      </Row>
    </Block>
    <Block className={styles.block_white}>
      <BlockHeader title="How to participate" />
      <p>
        TechRace is open for anyone interested in learning, solving, developing and trying new stuff with tech!
        <br />
        <br />
        You can be a software developer, first year business student, designer, law expert…. It doesn’t matter what your
        background is, this is for everyone!
        <br />
        <br />
        Find out more info about participating from our Facebook events! Registration opens THU 23.8.
        <br />
      </p>
      <BlockHeader title="Schedule" />
      <p>
        TechRace starts in mid September in Helsinki and ends early October in Espoo, touring most of the college cities
        in Finland.
        <br />
        <br />
        The TechRace events are one-night-events. The program includes the tech race part and short pitches from all of
        the organizers.
        <br />
        <br />
        More detailed schedule:
      </p>
      <Row className={styles.schedule_titles}>
        <Col xs={3}>Date & City</Col>
        <Col xs={3}>Location</Col>
        <Col xs={6}>Co-organizer</Col>
      </Row>
      <Row>
        <Col xs={3}>17.9 Helsinki</Col>
        <Col xs={3}>Tiedekulma</Col>
        <Col xs={6}>Helsinki Think Company</Col>
        <Col xs={3}>12.9 Tampere</Col>
        <Col xs={3}>Tribe Tampere</Col>
        <Col xs={6}>Tampere Entrepreneurship Society</Col>
        <Col xs={3}>19.9 Vaasa</Col>
        <Col xs={3}>TBA</Col>
        <Col xs={6}>Vaasa Entrepreneurship Society</Col>
        <Col xs={3}>18.9 Turku</Col>
        <Col xs={3}>SparkUp</Col>
        <Col xs={6}>Boost Turku</Col>
        <Col xs={3}>24.9 Jyväskylä</Col>
        <Col xs={3}>TBA</Col>
        <Col xs={6}>Jyväskylä Entrepreneurship Society</Col>
        <Col xs={3}>25.9 Lappeenranta</Col>
        <Col xs={3}>TBA</Col>
        <Col xs={6}>LUT Entrepreneurship Society</Col>
        <Col xs={3}>27.9 Joensuu</Col>
        <Col xs={3}>Tiedepuisto</Col>
        <Col xs={6}>Joensuu Entrepreneurship Society</Col>
        <Col xs={3}>4.10 Espoo</Col>
        <Col xs={3}>Startup Sauna</Col>
        <Col xs={6} />
        <Col xs={3}>5.10 Oulu</Col>
        <Col xs={3}>Aleksinkulma</Col>
        <Col xs={6}>Oulu Entrepreneurship Society</Col>
      </Row>
    </Block>
    <Footer />
  </div>
);

export default Terminal;
