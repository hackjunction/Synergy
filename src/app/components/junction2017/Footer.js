import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Block from '../viewBlocks/Block';
import styles from "./Footer.c.scss";

const Footer = () =>
  <Block className={styles.block} contentClassName={styles.blockContent}>
    <Row>
      <Col xs={12} sm={3}>
        <h2>Event</h2>
        <p>Contact:<br />
          hello@hackjunction.com<br />
          partnerships@hackjunction.com
        </p>
      </Col>
      <Col smOffset={1} xs={12} sm={3}>
        <h2>For Media</h2>
        <p>
          <a href="https://www.flickr.com/people/151708924@N07/" className={styles.footer_link}>Official Junction photos</a>
        </p>
      </Col>
      <Col smOffset={1} xs={12} sm={3}>
        <h2>Social</h2>
        <p><a href="https://www.facebook.com/hackjunction">
          <img className={styles.junction_footer_social_image} src="https://staging.hackjunction.com/wp-content/uploads/2017/08/fb.png" />
          Facebook</a></p>
        <p><a href="https://www.instagram.com/hackjunction/">
          <img className={styles.junction_footer_social_image} src="https://staging.hackjunction.com/wp-content/uploads/2017/08/ig.png" />
          Instagram</a></p>
        <p><a href="https://blog.hackjunction.com/">
          <img className={styles.junction_footer_social_image} src="https://staging.hackjunction.com/wp-content/uploads/2017/08/md.png" />
          Medium</a></p>
      </Col>
    </Row>
    <Row center="xs" className={styles.base}>
      <p>Designed and developed by the amazing Junction Team</p> <br />
    </Row>
  </Block>;

export default Footer;
