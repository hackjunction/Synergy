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
        <Col xs={12} className="bold text-secondary" />
      </Row>
      <BlockHeader title="OUR PARTNERS 2018">
        <p>
          Our partners are a mix of industry leaders and agile startups, all looking to support young developers and
          co-create the innovations of tomorrow.<br />
          <br />Want to see your logo here? Contact us at partnerships@hackjunction.com to get on board with the
          Junction community.
        </p>
      </BlockHeader>
      <PartnerSection
        categories={[{ priority: 300, size_md: 4, size_xs: 6 }, { priority: 200, size_md: 3, size_xs: 4 }]}
        year="2018"
      />
      <Row className="junction_partners" center="xs">
        <Col xs={12} md={12}>
          <a href="https://hackjunction.com/partners">
            <button className={styles.apply_button}>LAST YEAR&#39;S PARTNERS</button>
          </a>
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default Partners;
