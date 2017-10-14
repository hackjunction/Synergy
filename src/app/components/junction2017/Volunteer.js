import React from 'react';
import Scroll from 'react-scroll';
import { Row } from 'react-flexbox-grid';
import Block from '../viewBlocks/Block';
import styles from './Volunteer.c.scss';
import TopNav from '../TopNav';

const Volunteer = () =>
  <Scroll.Element name="junction 2017">
    <TopNav />
    <Block className={styles.block} contentClassName={styles.content}>
      <Row className={styles.block}>
        <h1>BUILDING FOR TOMORROW</h1>
          <p className={styles.paragraph}>
            Junction 2017 is divided into multiple tracks, each including several challenges set by our amazing partners. The best project will be awarded with the main prize of 20k€.
          </p>
          <a href="/register">
            <button className={styles.volunteer_button}>APPLY</button>
          </a>
      </Row>
    </Block>
  </Scroll.Element>;

export default Volunteer;
