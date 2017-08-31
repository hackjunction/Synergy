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
      <BlockHeader title="WHY PARTNER WITH US">
        <p>
          Junction is a unique opportunity to the front row of Engineering, Design and Business Development. Want to be the first one to see what the future of tech holds?<br />
        <br />You don’t want to miss out. For partnership inquiries, contact us at partnerships@hackjunction.com and we will be more than happy to tell you more about our one-of-a-kind-community.
        </p>
      </BlockHeader>
      <Row className="junction_partners" center="xs">
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
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/nordea.png"
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
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/smartly.png"
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
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/stara.png"
            className="responsive"
          />
        </Col>
        <Col xs={12} md={12}>
          <hr className={styles.separator}></hr>
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/suunto.png"
            className="responsive"
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/helvar.png"
            className="responsive"
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/procountor.png"
            className="responsive"
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/finnid.png"
            className="responsive"
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/aalto.png"
            className="responsive"
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/fleetboard.png"
            className="responsive"
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/qt.png"
            className="responsive"
          />
          </Col>
          <Col xs={4} md={3}>
            <img
              src="https://staging.hackjunction.com/wp-content/uploads/2017/08/kone.png"
              className="responsive"
            />
            </Col>
          <Col xs={4} md={3}>
            <img
              src="https://staging.hackjunction.com/wp-content/uploads/2017/08/suneffects.png"
              className="responsive"
            />
          </Col>

      </Row>
    </Block>
  </Scroll.Element>;

export default Partners;
