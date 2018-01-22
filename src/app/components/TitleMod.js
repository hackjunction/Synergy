import React from 'react';
import { Row } from 'react-flexbox-grid';
import Block from './viewBlocks/Block';
import styles from './TitleMod.c.scss';

const TitleMod = (props, params) => (
  <Block className={styles.block} contentClassName={styles.content}>
    <Row className={styles.block}>
      <h1>{ props.title ? props.title : "JUNCTION" }</h1>
      { props.content ? props.content.map(text => <p className={styles.paragraph}> {text} </p>) :
      <p className={styles.paragraph}>
      </p>}
    </Row>
  </Block>
);

export default TitleMod;
