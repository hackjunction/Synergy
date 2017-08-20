import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './landing.scss';

const Footer = () =>
  <Grid fluid>
    <Row start="xs" className="junction_footer">
      <Col xsOffset={1} lg={2}>
        <h2>Event</h2>
      </Col>
      <Col xsOffset={1} lg={2}>
        <h2>For Media</h2>
      </Col>
      <Col xsOffset={1} lg={2}>
        <h2>Social</h2>
      </Col>
      <Col xsOffset={1} lg={2}>
        <h2>Community</h2>
      </Col>
    </Row>
  </Grid>;

export default Footer;
