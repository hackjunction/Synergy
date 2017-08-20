import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styles from "./Events.c.scss";
import Block from "../viewBlocks/Block";
import BlockHeader from "../viewBlocks/BlockHeader";

import EventList from "../common/EventList";

const Events = () =>
  <Block className={styles.block}>
    <Row>
      <Col xs={12} className="bold text-secondary">
        <h4>PRE-EVENTS</h4>
      </Col>
    </Row>
    <BlockHeader title="NOT JUST A HACKATHON">
      <p>
        Our main side event Hack-Talks and a lot of different satellite events can be found through this website and Facebook.
      </p>
    </BlockHeader>
    <Row>
      <Col xs={12}>
        <a href="https://blog.hackjunction.com/dear-linus-can-you-please-reply-to-my-messages-f596b929d09f"><img
          className="junction_events_hacktalks responsive"
          src="https://staging.hackjunction.com/wp-content/uploads/2017/08/hacktalks.jpg"
        /></a>
      </Col>
    </Row>
    <EventList />
  </Block>;

export default Events;
