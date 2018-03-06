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
          'JUNCTIONx is the low-barrier entrypoint on your path to creating your own hackathon. We want to provide you with the necessary tools, guidelines, and especially our brand to make everything as easy as possible for you. This way you can concentrate on making your own Junction unique for participants, partners and especially for your organising team.'
        ]}
      />
    </Row>
    <Block className={styles.block} contentClassName={styles.content}>
      <Row className={styles.community}>
        <Col>
          <h1>WHAT JUNCTIONx OFFERS?</h1>
          <h4>1. Organizers handbook</h4>
          <p>
            Concludes our insider knowledge on organizing a Hackathon. It contains information about everything from
            setting up the venue to creating your team.
          </p>
          <h4>2. Use of Brand</h4>
          <p>
            We have built our brand to a point where it is one of the most recognised hackathons in the world. The brand
            will ease your job in many ways, for example in getting partners and applicants.
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
        <Col>
          <br />
          <p>Want to hear more? Shoot us a message at global@hackjunction.com!</p>
        </Col>
      </Row>
    </Block>
    <Footer />
  </div>
);

export default Community;
