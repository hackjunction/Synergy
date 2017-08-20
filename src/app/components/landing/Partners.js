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
        A unique opportunity to the front row of Engineering, Design and
        Business Development, happens once a year before Slush. You would not
        want to miss out. Contact our Head of Partnerships, Mikko for more info
        mikko.kuusisto-at-hackjunction.com
      </Col>
      <Col xsOffset={2} xs={9}>
        <Col xs={4}>
          <img src="https://staging.hackjunction.com/wp-content/uploads/2017/08/elisa.png" className="responsive" />
        </Col>
        <Col xs={4}>
          <img src="https://staging.hackjunction.com/wp-content/uploads/2017/08/veikkaus.png" className="responsive" />
        </Col>
        <Col xs={4}>
          <img src="https://staging.hackjunction.com/wp-content/uploads/2017/08/suunto.png" className="responsive" />
        </Col>
      </Col>
      <Col xsOffset={2} xs={9}>
        <Col xs={4}>
          <img src="https://staging.hackjunction.com/wp-content/uploads/2017/08/suneffects.png" className="responsive" />
        </Col>
        <Col xs={4}>
          <img src="https://staging.hackjunction.com/wp-content/uploads/2017/08/daimler.png" className="responsive" />
        </Col>
        <Col xs={4}>
          <img src="https://staging.hackjunction.com/wp-content/uploads/2017/08/planmeca.png" className="responsive" />
        </Col>
      </Col>
      <Col xsOffset={2} xs={9}>
        <Col xs={4}>
          <img src="https://staging.hackjunction.com/wp-content/uploads/2017/08/outotec.png" className="responsive" />
        </Col>
        <Col xs={4}>
          <img src="https://staging.hackjunction.com/wp-content/uploads/2017/08/helvar.png" className="responsive" />
        </Col>
        <Col xs={4}>
          <img src="https://staging.hackjunction.com/wp-content/uploads/2017/08/procountor.png" className="responsive" />
        </Col>
      </Col>

      <Col xsOffset={5} xs={6}>
        <div>
          <button className="junction_button junction_border">SEE ALL</button>
        </div>
      </Col>
    </Row>
  </Grid>;

export default Partners;
