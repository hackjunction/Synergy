import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Block from "../viewBlocks/Block";
import BlockHeader from "../viewBlocks/BlockHeader";

const About = () =>
  <Block>
    <BlockHeader title="JUNCTION?" />
    <Row className="junction_about">
      <Col xs={12} className="junction-description">
        Junction is a{" "}
        <span className="text-secondary">global converging point*</span> for
        thousands of developers, designers, and entrepreneurs from around the
        world.
      </Col>
    </Row>
    <Row>
      <Col xs={12} className="junction-description">
        {" "}<span className="text-tetriary">
          Convergence is a coming together of two or more distinct entities or
          phenomena.
        </span>
      </Col>
    </Row>
  </Block>;

export default About;
