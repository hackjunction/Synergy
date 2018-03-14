import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './GoldenTicket.c.scss';

const GoldenTicket = () => (
  <Grid fluid className={styles.grid}>
    <div className={styles.content}>
      <Row className={styles.logo}>
        <img className={styles.logoImage} src="/images/golden_ticket.svg" />
      </Row>
      <Row>
        <Col className={styles.paragraph} xs={12} md={8}>
          You have won a Junction Golden Ticket! The Junction Golden Ticket is your guaranteed way to Junction 2018,
          which is held at Dipoli, Espoo, Finland on 23.–25.11.2018. Throughout the year we at Junction give out Golden
          Tickets to various hackathon organisers to give recognition to the winning teams. With this ticket we want to
          make it as easy as possible for talented hackers from the hackathon scene to attend our events.
        </Col>
      </Row>
      <Row className={styles.title}>
        <h2>
          <span>Golden Ticket grants you</span>
        </h2>
      </Row>
      <Row className={styles.community}>
        <Col md={4} xs={12}>
          <p>You are accepted to the Junction main event</p>
        </Col>
        <Col md={4} xs={12}>
          <p>Free tickets to our tech conference Hack\Talks</p>
        </Col>
        <Col md={4} xs={12}>
          <p>... And other little surprises that will be announced later.</p>
        </Col>
      </Row>
      <Row className={styles.title}>
        <h2>
          <span>Confirm your Golden Ticket</span>
        </h2>
      </Row>
      <Row className={styles.title}>
        <h2>
          <span>Hackathon organiser?</span>
        </h2>
      </Row>
    </div>
  </Grid>
);

export default GoldenTicket;
