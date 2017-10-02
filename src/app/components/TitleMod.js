import React from 'react';
import { Row } from 'react-flexbox-grid';
import Block from './viewBlocks/Block';
import styles from './TitleMod.c.scss';

const TitleMod = () =>
    <Block className={styles.block} contentClassName={styles.content}>
      <Row className={styles.block}>
      <h1>WANT TO BUILD JUNCTION WITH US?</h1>
        <p className={styles.paragraph}>
          Junction could not exist without our year-round volunteer team, which grows up to 300 people closer to the main event. Our volunteer applications are now open, join the family!
        </p>
        <a href="/volunteer">
          <button className={styles.volunteer_button}>VOLUNTEER</button>
        </a>
      </Row>
    </Block>;

export default TitleMod;
