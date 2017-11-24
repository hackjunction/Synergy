import React from 'react';
import { Row } from 'react-flexbox-grid';
import Block from './viewBlocks/Block';
import styles from './TitleMod.c.scss';

const TitleMod = () => (
  <Block className={styles.block} contentClassName={styles.content}>
    <Row className={styles.block}>
      <h1>BUILDING FOR TOMORROW</h1>
      <p className={styles.paragraph}>
        Junction 2017 is divided into multiple tracks, each including several challenges set by our amazing partners.
        The best project will be awarded with the main prize of 20k€.
      </p>
    </Row>
  </Block>
);

export default TitleMod;
