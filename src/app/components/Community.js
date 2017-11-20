import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styles from './Community.c.scss';
import Block from "./viewBlocks/Block";
import TopNav from './TopNav';
import TitleMod from './TitleMod';
import Footer from './junction2017/Footer';

const Community = () =>
  (<div>
    <TopNav />
    <Row className={styles.background_top} center="xs">
      <TitleMod />
    </Row>
    <Block className={styles.block} contentClassName={styles.content}>
      <Row className={styles.community}>
        <Col>
          <h1>WHAT IS JUNCTION?</h1>
          <h4>A COMMUNITY OF CREATORS</h4>
          <p>
          Junction has grown to become Europe’s biggest hackathon and an
          embodiment of the blooming startup ecosystem of the Nordics.
          But that’s not all we are about. We know that the future is not
          created by individuals, it’s created by communities, ideologies,
          and beliefs. That’s why Junction is much more than an event,
          it is an ideology, a movement with the goal of inspiring and
          fostering a community of creators. At Junction we believe a
          fun open-minded environment, innovative industry partners, and a
          little bit of passion is the beginning to creating a better tomorrow.
          </p>
        </Col>
        <Col>
          <h4>JUNCTION 2017 – 48 HOURS TO BUILD THE FUTURE</h4>
          <p>
          Hackathons are all about taking something you love, combining
          it with tech and learning something in the process. Junction 2017
          brings together hackers, designers, the coolest partners and
          hardware for one weekend of hacking. It’s a place where creators
          can let go of their inhibitions and create cool inspiring projects.
          </p>
        </Col>
        <Col>
          <h4>UNIQUE FROM THE GROUND UP</h4>
          <p>
          Junction is not your standard cafeteria hackathon. Junction
          is meant to be seen, to be heard, to be felt and most importantly
          to be experienced. Held annually in the cold and slushy Helsinki
          of late November, Junction is bound to be an unforgettable
          experience. In 2015 Junction was built inside of an old abandoned
          boiler hall. In 2016 we took over a19th century shipping warehouse
          right next to the sea. This year we are bringing Junction 2017 to
          the roots of it all: overtaking the newly renovated main building
          of Aalto University, Dipoli, to shine light to the importance of
          our mission of inspiring people to learn and create with technology.
          </p>
          <p>
          Held Friday through Sunday on November 24-26th, 2016 in
          Helsinki, Finland Junction is the place to design and develop
          your ideas into actual projects together with like-minded hackers.
          </p>
          <a href="/volunteer">
            <button className={styles.apply_button}>VOLUNTEER</button>
          </a>
        </Col>
      </Row>
    </Block>
    <Footer />
  </div>);

export default Community;
