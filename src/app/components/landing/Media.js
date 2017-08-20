import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styles from "./Media.c.scss";
import Block from "../viewBlocks/Block";
import BlockHeader from "../viewBlocks/BlockHeader";

const Media = () =>
  <Block className={styles.block}>
    <Row>
      <Col xs={12} className="bold text-secondary">
        <h4>MEDIA</h4>
      </Col>
    </Row>
    <BlockHeader title="STAY UP TO DATE WITH US">
      <p>
        We often share our wisdom, from our path to build this amazing
        Hackathon. Be part of the conversation and learn first all the
        intriguing doings of Junction.
      </p>
    </BlockHeader>
    <Row className="junction_media">
      <Col xs={12} md={4}>
        <img src="http://loremflickr.com/320/240" className="responsive" />
        <h3>AMAZING POST</h3>
        <p>
          This is a very nice and short description that is really a
          clickbait...
        </p>
      </Col>
      <Col xs={12} md={4}>
        <img src="http://loremflickr.com/320/240" className="responsive" />
        <h3>AMAZING POST</h3>
        <p>
          This is a very nice and short description that is really a
          clickbait...
        </p>
      </Col>
      <Col xs={12} md={4}>
        <img src="http://loremflickr.com/320/240" className="responsive" />
        <h3>AMAZING POST</h3>
        <p>
          This is a very nice and short description that is really a
          clickbait...
        </p>
      </Col>
    </Row>
    <Row>
      <Col xsOffset={5} xs={6}>
        <div>
          <button className="junction_button junction_border">SEE ALL</button>
        </div>
      </Col>
    </Row>
  </Block>;

export default Media;
