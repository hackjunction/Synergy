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
          'Since we have an outstanding understanding on organizing hackathons, JUNCTIONx-program was created to spread our knowledge further. We want to make it as easy as possible for aspiring hackathon organizers to kickstart their events and avoid the beginner’s pitfalls. JUNCTIONx is a program where we give our knowledge and the brand to organizers. We really want to empower people to solve the world’s issues with the help of the latest technologies.',
          'Want to hear more? Shoot us a message at global@hackjunction.com!'
        ]}
      />
    </Row>
    <Block className={styles.block} contentClassName={styles.content}>
      <Row className={styles.community}>
        <Col>
          <h1>WHAT JUNCTIONx OFFERS?</h1>
          <h4>1. Organizers handbook</h4>
          <p>
            Concludes our insider knowledge on organizing a hackathon. It contains information about everything from
            setting up the venue to creating your team.
          </p>
          <h4>2. Use of Brand</h4>
          <p>
            We have built our brand to a point where Junction is one of the most recognised hackathons in the world. The
            JUNCTIONx brand will ease your job in many ways, such as reaching applicants and partners from our global
            community.
          </p>
        </Col>
        <Col>
          <h2>Timeline for organizing a JUNCTIONx</h2>
          <br />
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2018/03/timeline_jucntionx.png"
            className="responsive"
          />
        </Col>
      </Row>
    </Block>
    <Footer />
  </div>
);

export default Community;
