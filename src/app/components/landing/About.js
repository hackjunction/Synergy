import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './landing.scss';

import EventList from '../common/EventList';

const About = () =>
  <Row start="xs" className="junction_about">
    <Col xs={12}>
      <Row>
        <Col xsOffset={1} xs={9} className="bold text-secondary">
          <h4>ABOUT</h4>
        </Col>
      </Row>
    </Col>
    <Col xs={12}>
      <Row>
        <Col xsOffset={1} xs={2}>
          <h1 className="text-underline">JUNCTION?</h1>
        </Col>
      </Row>
    </Col>
    <Col xs={12}>
      <Row>
        <Col xsOffset={1} xs={8} className="junction-description">
          Junction is a{' '}
          <span className="text-secondary">global converging point</span> for
          thousands of developers, designers, and entrepreneurs from around the
          world
        </Col>
      </Row>
    </Col>
    <Col xs={12}>
      <Row>
        <Col xsOffset={1} xs={2}>
          <button className="junction_button junction_border">
            OUR COMMUNITY
          </button>
        </Col>
      </Row>
    </Col>
    <Col xs={12}>
      <Row>
        <Col xsOffset={1} xs={9} className="bold text-secondary junction_up_next">
          <h4>UP NEXT</h4>
        </Col>
      </Row>
    </Col>
    <Col xs={12}>
      <Row>
        <Col xsOffset={1} xs={3}>
          <h1 className="text-underline">PRE EVENTS</h1>
        </Col>
      </Row>
    </Col>
    <Col xs={12}>
      <Row>
        <Col xsOffset={2} xs={8}>
          <img
            className="junction_events_hacktalks"
            src="http://www.citi.io/wp-content/uploads/2015/08/1168-00-06.jpg"
          />
        </Col>
      </Row>
    </Col>
    <Col xs={12}>
      <EventList />
    </Col>
  </Row>;

export default About;
