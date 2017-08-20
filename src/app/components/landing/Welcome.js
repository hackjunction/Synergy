import React from "react";
import { Row, Col } from "react-flexbox-grid";
import ReactRotatingText from "react-rotating-text";
import "./landing.scss";

const Welcome = () =>
  <Row center="xs" className="junction_welcome">
    <Col className="junction_hackthefuture">
      <h1>
        HACK THE FUTURE OF <br />
        <br />
        <ReactRotatingText
          color="#5abecf"
          items={[
            "HEALTHTECH",
            "LOGISTICS",
            "ENTERTAINMENT",
            "MULTIMODAL MOBILITY",
            "INDUSTRIAL INTERNET",
            "FINTECH",
          ]}
        />
      </h1>
      <br />
      <h2>27-29 November - Helsinki</h2>
    </Col>
    <Col xsOffset={1} xs={1} className="junction_welcome_bottom">
      <a href="#about">
        <div className="arrow">
          <ul>
            <li />
            <li />
          </ul>
        </div>
      </a>
    </Col>
  </Row>;

export default Welcome;
