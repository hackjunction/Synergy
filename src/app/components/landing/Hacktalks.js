import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './landing.scss';

import FaqSection from '../FaqSection';

const Hacktalks = () =>
  <Grid fluid>
    <Row start="xs" className="junction_hacktalks">
      <Col xsOffset={1} xs={9} className="bold text-secondary">
        <h4>ABOUT THE EVENT</h4>
      </Col>
      <Col xsOffset={1} xs={5}>
        <h1 className="text-underline">
          FREQUENTLY ASKED <br />QUESTIONS
        </h1>
      </Col>
      <Col xsOffset={1} xs={6}>
        Anything you want to know about the event, we got you covered. While we can argue we have all the answers, if you feel something is missing, feel free to contact us.
      </Col>
    </Row>
    <Row>
      <Col xsOffset={1} xs={4}>
        <FaqSection question='What is Junction?'>Angelos.</FaqSection>
      </Col>
      <Col xsOffset={1} xs={4}>
        <FaqSection question='What is Junction?'>Angelos.</FaqSection>
      </Col>
    </Row>
  </Grid>;

export default Hacktalks;
