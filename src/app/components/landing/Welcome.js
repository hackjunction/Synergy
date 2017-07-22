import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './landing.scss';

const Landing = () =>
  <Row center="xs" className="junction_welcome">
    <Col xs={12} className="junction_hackthefuture">
      <h2>HACK THE FUTURE</h2>
      <h4>27-29 November - Helsinki</h4>
    </Col>
    <Col xsOffset={3} xs={3} className="junction_welcome_bottom">
      <div>
        <button className="junction_button junction_border">
          REGISTRATION FORM
        </button>
      </div>
    </Col>
    <Col xsOffset={2} xs={1} className="junction_welcome_bottom">
      <a>FACEBOOK</a>
      <a>INSTAGRAM</a>
      <a>BLOG</a>
    </Col>
  </Row>;

export default Landing;
