import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import styles from './GoldenTicket.c.scss';

const GoldenTicket = () => {
  return (
    <Grid fluid className={styles.grid}>
      <div className={styles.content}>
        <Row className={styles.logo}>
          <img className={styles.logoImage} src="/images/golden_ticket.svg" alt="" />
        </Row>
        <Row>
          <Col className={styles.paragraph} xs={12} md={8}>
            You have won a Junction Golden Ticket! The Junction Golden Ticket is your guaranteed way to Junction 2018,
            which is held at Dipoli, Espoo, Finland on 23.–25.11.2018. Throughout the year we at Junction give out
            Golden Tickets to various hackathon organisers to give recognition to the winning teams. With this ticket we
            want to make it as easy as possible for talented hackers from the hackathon scene to attend our events.
          </Col>
        </Row>
        <Row className={styles.title}>
          <h2>
            <span>Golden Ticket grants you</span>
          </h2>
        </Row>
        <Row className={styles.links} middle="xs">
          <Col md={4} xs={12}>
            <Link className={styles.a} to="/">
              <img
                src="https://farm5.staticflickr.com/4555/38092639235_3bd70878b9_o_d.jpg"
                className="responsive"
                alt=""
              />
              <p>You are accepted to the Junction main event</p>
            </Link>
          </Col>
          <Col md={4} xs={12}>
            <a className={styles.a} href="https://hacktalks.hackjunction.com">
              <img
                src="https://staging.hackjunction.com/wp-content/uploads/2018/03/2018-03-15-16.03.31.jpg"
                className="responsive"
                alt=""
              />
              <p>Free tickets to our tech conference Hack\Talks</p>
            </a>
          </Col>
          <Col md={4} xs={12}>
            <p>... And other little surprises that will be announced later.</p>
          </Col>
        </Row>
        <Row className={styles.title}>
          <h2>
            <span>Confirm your Golden Ticket</span>
          </h2>
          <Col className={styles.paragraph} xs={12} md={8}>
            The last step in claiming your ticket is to confirm your secret code from the link below. After confirming
            you will still have to register once the system opens in the fall, but don’t worry, we’ll keep you updated!
          </Col>
          <Col className={styles.paragraph} xs={12} md={8}>
            <a href="https://hackjunction.typeform.com/to/mV6NB8">
              {' '}
              <div className={styles.confirm}>CONFIRM</div>
            </a>
          </Col>
        </Row>
        <Row className={styles.title}>
          <h2>
            <span>Hackathon organiser?</span>
          </h2>
          <Col className={styles.paragraph} xs={12} md={8}>
            Want to grant Golden Tickets in your event? Please contact at hello(at)hackjunction.com
          </Col>
        </Row>
      </div>
    </Grid>
  );
};

export default GoldenTicket;
