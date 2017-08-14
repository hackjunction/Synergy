import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './landing.scss';

const Partners = () =>
  <Grid fluid>
    <Row start="xs" className="junction_partners">
      <Col xsOffset={1} xs={9} className="bold text-secondary">
        <h4>PARTNERS</h4>
      </Col>
      <Col xsOffset={1} xs={5}>
        <h1 className="text-underline">
          WHY TO PARTNER <br /> WITH US
        </h1>
      </Col>
      <Col xsOffset={1} xs={6}>
          A unique opportunity to this crossroad of Engineering, Design and Business Development across the globe, happens once a year before Slush. You would not want to miss out.
          Contact our Partnerships extraordinaire Mikko for more info
          mikko-at-hackjunction.com
      </Col>
      <Col xsOffset={5} xs={6}>
        <div>
          <button className="junction_button junction_border">SEE ALL</button>
        </div>
      </Col>
    </Row>
  </Grid>;

export default Partners;
