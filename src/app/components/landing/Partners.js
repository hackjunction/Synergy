import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import styles from './Partners.c.scss';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';
import PartnerSection from './PartnerSection';

const Partners = () => (
  <Scroll.Element name="partners">
    <Block className={styles.block}>
      <Row>
        <Col xs={12} className="bold text-secondary">
          <h4>2017 PARTNERS</h4>
        </Col>
      </Row>
      <BlockHeader title="PARTNER WITH US">
        <p>
          Our partners are a mix of industry leaders and agile startups, all looking to support young developers and
          co-create the innovations of tomorrow.<br />
          <br />Want to see your logo here? Contact us at partnerships@hackjunction.com to get on board with the
          Junction community.
        </p>
      </BlockHeader>
      <PartnerSection
        categories={[{ priority: 300, size_md: 4, size_xs: 6 }, { priority: 200, size_md: 3, size_xs: 4 }]}
        year="2017"
      />
      <Row className="junction_partners" center="xs">
        <Col xs={12} md={12}>
          <hr className={styles.separator} />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/spotify.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/supercell.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/11/blackrock.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/legaltechsummit.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/aalto.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/fleetboard.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/kone.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/09/trimble.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/holvi.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/10/castrensnellman.png"
            className="responsive"
            alt=""
          />
        </Col>
        <Col xs={12} md={12}>
          <a href="https://hackjunction.com/partners">
            <button className={styles.apply_button}>SEE ALL</button>
          </a>
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default Partners;
