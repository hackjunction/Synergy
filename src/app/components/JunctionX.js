import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styles from './JunctionX.c.scss';
import Block from './viewBlocks/Block';
import TopNav from './TopNav';
import TitleMod from './TitleMod';
import Footer from './landing/Footer';

const Community = () => (
  <div>
    <TopNav />
    <Row className={styles.background_top} center="xs">
      <TitleMod
        title="What is JUNCTIONx?"
        content={[
          'JUNCTIONx is the entry point on your path to creating your own hackathon. We want to provide you with the necessary tools, guidelines, and especially our JUNCTIONx brand to help you avoid the biggest pitfalls. This way you can concentrate on making your own JUNCTIONx unique for participants, partners and especially for your organising team.  We want people to join our community and to empower more people to use technology as a tool to solve problems and face challenges.'
        ]}
      >
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdgH9cPONqTO4jDSsKm7vvTMJCm73ipYZ2oPy_Cd4r_RpOc8g/viewform?usp=sf_link">
          <button className={styles.apply_button}> APPLY TO JUNCTIONX</button>
        </a>
      </TitleMod>
    </Row>

    <Block className={styles.block} contentClassName={styles.content}>
      <Row className={styles.community}>
        <Col>
          <h1>WHAT JUNCTIONx OFFERS?</h1>
          <h4>1. Organizers handbook</h4>
          <p>
            Concludes all of our knowledge on our way of organizing a Junction hackathon. It contains practical
            information and instructions on all aspects of the hackathon.
          </p>
          <h4>2. Use of Brand</h4>
          <p>
            We have built our brand to a point where it is one of the most recognised hackathons in the world. The
            JUNCTIONx brand will ease your job in many ways, such as reaching applicants and partners from our global
            community. Being able to show what we have created in the Nordics will be really valuable on making your own
            JUNCTIONx a ground-breaking event.
          </p>
          <h4>3. Templates to ease your life</h4>
          <p>
            Website template and design templates such as poster designs that you can get your event viral straight
            away.
          </p>
        </Col>
        <Col>
          <h2>Timeline for organizing a JUNCTIONx</h2>
          <br />
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2018/03/timeline_jucntionx.png"
            className="responsive"
            alt=""
          />
        </Col>
      </Row>
    </Block>
    <Footer />
  </div>
);

export default Community;
