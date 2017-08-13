import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './landing.scss';

const Tracks = () =>
  <Grid fluid>
    <Row start="xs" className="junction_tracks">
      <Col xsOffset={1} xs={9} className="bold text-secondary">
        <h4>TRACKS</h4>
      </Col>
      <Col xsOffset={1} xs={5}>
        <h1 className="text-underline">BUILDING FOR TOMORROW</h1>
      </Col>
      <Col xsOffset={1} xs={9}>
        A hackathon with unlimited possibilities to build
      </Col>
      <Col xs>
        <Row center="xs">
          <Col xs={3}>
            <img src="http://lorempixel.com/output/city-q-c-640-480-8.jpg" />
          </Col>
          <Col xs={3}>
            <img src="http://lorempixel.com/output/sports-q-c-640-480-2.jpg" />
          </Col>
          <Col xs={3}>
            <img src="http://lorempixel.com/output/animals-q-c-640-480-4.jpg" />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={3}>
            <img src="http://lorempixel.com/output/sports-q-c-640-480-7.jpg" />
          </Col>
          <Col xs={3}>
            <img src="http://lorempixel.com/output/people-q-c-640-480-7.jpg" />
          </Col>
          <Col xs={3}>
            <img src="http://lorempixel.com/output/abstract-q-c-640-480-4.jpg" />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={3}>
            <img src="http://lorempixel.com/output/animals-q-c-640-480-5.jpg" />
          </Col>
          <Col xs={3}>
            <img src="http://lorempixel.com/output/food-q-c-640-480-6.jpg" />
          </Col>
          <Col xs={3}>
            <img src="http://lorempixel.com/output/sports-q-c-640-480-3.jpg" />
          </Col>
        </Row>
      </Col>
    </Row>
  </Grid>;

export default Tracks;
