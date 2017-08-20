import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Block from "../viewBlocks/Block";
import BlockHeader from "../viewBlocks/BlockHeader";

import EventList from "../common/EventList";

const Events = () =>
  <Block>
    <BlockHeader title="PRE EVENTS" />
    <Row>
      <Col xs={12}>
        <img
          className="junction_events_hacktalks responsive"
          src="https://staging.hackjunction.com/wp-content/uploads/2017/08/hacktalks.jpg"
        />
      </Col>
    </Row>
    <EventList />
  </Block>;

export default Events;
