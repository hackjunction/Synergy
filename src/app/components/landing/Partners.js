import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Scroll from 'react-scroll';
import styles from "./Partners.c.scss";
import Block from "../viewBlocks/Block";
import BlockHeader from "../viewBlocks/BlockHeader";

const Partners = () =>
  (<Scroll.Element name="partners">
    <Block className={styles.block}>
      <Row>
        <Col xs={12} className="bold text-secondary">
          <h4>PARTNERS</h4>
        </Col>
      </Row>
      <BlockHeader title="PARTNER WITH US">
        <p>
          Our partners are a mix of industry leaders and agile startups, all looking to support young developers and co-create the innovations of tomorrow.<br />
          <br />Want to see your logo here? Contact us at partnerships@hackjunction.com to get on board with the Junction community.
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
            src="https://staging.hackjunction.com/wp-content/uploads/2017/09/N_L1_B4_RGB-1.png"
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
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/stara.png"
            className="responsive"
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/finnair.png"
            className="responsive"
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/esa.png"
            className="responsive"
          />
        </Col>
        <Col xs={12} md={12}>
          <hr className={styles.separator} />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/spotify.png"
            className="responsive"
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/supercell.png"
            className="responsive"
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/blackrock.png"
            className="responsive"
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/legaltechsummit.png"
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
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/kone.png"
            className="responsive"
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/09/trimble.png"
            className="responsive"
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/holvi.png"
            className="responsive"
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/castrensnellman.png"
            className="responsive"
          />
        </Col>
        <Col xs={12} md={12}>
          <a href="https://hackjunction.com/partners">
            <button className={styles.apply_button}>SEE ALL</button>
          </a>
        </Col>
      </Row>
    </Block>
  </Scroll.Element>);

export default Partners;
