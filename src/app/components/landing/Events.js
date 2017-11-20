import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Scroll from 'react-scroll';
import styles from "./Events.c.scss";
import Block from "../viewBlocks/Block";
import BlockHeader from "../viewBlocks/BlockHeader";

const Events = () =>
  (<Scroll.Element name="events">
    <Block className={styles.block}>
      <Row>
        <Col xs={12} className="bold text-secondary">
          <h4>SPECIAL EVENTS</h4>
        </Col>
      </Row>
      <BlockHeader title="NOT JUST A HACKATHON">
        <p>
        Junction is much more than your standard hackathon. We are a worldwide community of ambitious creators. Check out our Speaker Day Hack\Talks and local-events around the world.
        </p>
      </BlockHeader>
      <Row>
        <Col xs={12}>
          <a href="http://hacktalks.hackjunction.com"><img
            className="junction_events_hacktalks responsive"
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/hacktalks.jpg"
          />
          </a>
          <h3>HACK\TALKS</h3>
          <p>Hack\Talks is all about inspiring you. The evening will consist of intriguing keynotes and deep-tech learnings from industry experts. This is something you don’t want to miss.</p>
          <p className={styles.hacktalks_link}><a href="http://hacktalks.hackjunction.com">ATTEND</a></p>
        </Col>
        <Col xs={12}>
          <a href="http://terminal.hackjunction.com"><img
            className="junction_events_hacktalks responsive"
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/terminal.jpg"
          />
          </a>
          <h3>TERMINAL 2.0</h3>
          <p>
        Want to make your Junction experience last for a whole week?<br />
          </p>
          <p>
        Terminal 2.0. offers you an once in a life-time chance to spend a free
        week in Helsinki with fellow Junction hackers while meeting top-notch
        tech companies looking for fresh recruits!
          </p>
          <p className={styles.hacktalks_link}><a href="http://terminal.hackjunction.com">READ MORE</a></p>
        </Col>
      </Row>
    </Block>
  </Scroll.Element>);

export default Events;
