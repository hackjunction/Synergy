import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './landing/landing.scss';

const Landing = () =>
  <Grid>
    <Row center="xs" middle="xs">
      <Col xs={12}>
        <h2>HACK THE FUTURE</h2>
      </Col>
      <Col xs={12}>
        <h4>27-29 November - Helsinki</h4>
      </Col>
      <Col xs={12}>
        <div>
          <button className="junction_button border_junction">
            REGISTRATION FORM
          </button>
        </div>
      </Col>
    </Row>
  </Grid>;

export default Landing;
