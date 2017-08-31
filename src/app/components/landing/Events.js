import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Scroll from 'react-scroll';
import styles from "./Events.c.scss";
import Block from "../viewBlocks/Block";
import BlockHeader from "../viewBlocks/BlockHeader";

import EventList from "../common/EventList";

const Events = () =>
<Scroll.Element name="events">
  <Block className={styles.block}>
    <Row>
      <Col xs={12} className="bold text-secondary">
        <h4>SPECIAL EVENTS</h4>
      </Col>
    </Row>
    <BlockHeader title="NOT JUST A HACKATHON">
      <p>
        Junction is much more than your standard hackathon. We are a worldwide community of ambitious creators. Check out our Speaker Day Hack\Talks and our local-events around the world.
      </p>
    </BlockHeader>
    <Row>
      <Col xs={12}>
        <a href="https://blog.hackjunction.com/dear-linus-can-you-please-reply-to-my-messages-f596b929d09f"><img
          className="junction_events_hacktalks responsive"
          src="https://staging.hackjunction.com/wp-content/uploads/2017/08/hacktalks.jpg"
        /></a>
      <h3>HACK\TALKS</h3>
      <p>Hack\Talks is all about inspiring you. The evening will consist of intriguing keynotes and deep-tech learnings from industry experts. This is something you don’t want to miss. Speaker announcements coming soon!</p>
      <p className={styles.hacktalks_link}><a href="https://blog.hackjunction.com/dear-linus-can-you-please-reply-to-my-messages-f596b929d09f">ATTEND</a></p>
      </Col>
    </Row>
    <EventList />
  </Block>
  </Scroll.Element>;

export default Events;
