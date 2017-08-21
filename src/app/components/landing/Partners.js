import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Scroll from 'react-scroll';
import styles from "./Partners.c.scss";
import Block from "../viewBlocks/Block";
import BlockHeader from "../viewBlocks/BlockHeader";

const Partners = () =>
  <Scroll.Element name="partners">
    <Block className={styles.block}>
      <Row>
        <Col xs={12} className="bold text-secondary">
          <h4>PARTNERS</h4>
        </Col>
      </Row>
      <BlockHeader title="WHY TO PARTNER WITH US">
        <p>
          A unique opportunity to the front row of Engineering, Design and
        Business Development, happens once a year before Slush. <br />
          <br />You would not want to miss out. Contact our Head of Partnerships,
        Mikko for more info:
        <br />mikko.kuusisto-at-hackjunction.com
      </p>
      </BlockHeader>
      <Row className="junction_partners">
        <Col xs={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/elisa.png"
            className="responsive"
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/veikkaus.png"
            className="responsive"
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/suunto.png"
            className="responsive"
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/suneffects.png"
            className="responsive"
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/outotec.png"
            className="responsive"
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/planmeca.png"
            className="responsive"
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/helvar.png"
            className="responsive"
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/procountor.png"
            className="responsive"
          />
        </Col>
      </Row>
    </Block>
  </Scroll.Element>;

export default Partners;
