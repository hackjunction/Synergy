import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Mediumlist from '../common/MediumList';

import './landing.scss';

const Media = () =>
  <Grid fluid>
    <Row start="xs" className="junction_media">
      <Col xsOffset={1} xs={9} className="bold text-secondary">
        <h4>MEDIA</h4>
      </Col>
      <Col xsOffset={1} xs={5}>
        <h1 className="text-underline">
          STAY UP TO DATE <br /> WITH US
        </h1>
      </Col>
      <Col xsOffset={1} xs={6}>
        We often share our wisdom, from our path to build this amazing
        Hackathon. Be part of the conversation and learn first all the
        intriguing doings of Junction.
      </Col>
      <Col xsOffset={1} xs={9}>
        <Mediumlist />
      </Col>
      <Col xsOffset={5} xs={6}>
        <div>
          <button className="junction_button junction_border">SEE ALL</button>
        </div>
      </Col>
    </Row>
  </Grid>;

export default Media;
