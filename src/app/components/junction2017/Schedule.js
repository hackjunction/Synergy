import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Scroll from 'react-scroll';
import styles from "./Schedule.c.scss";
import Block from "../viewBlocks/Block";
import BlockHeader from "../viewBlocks/BlockHeader";

const About = () =>
  <Scroll.Element name="schedule">
    <Block className={styles.block}>
      <Row>
        <Col xs={12} className="bold text-secondary">
          <h4>SCHEDULE</h4>
        </Col>
      </Row>
      <BlockHeader title="2 DAYS OF AWESOMENESS!" />
      <Row>
        <Col xs={12}>
        <p>
          From food and drinks, to keynotes, workshops and satelite happenings,
          for all your needs and purposes, we got it. <br />Keep checking
          the schedule for changes and additions to our hectic program for the
          weekend!
        </p>
      </Col>
      </Row>
      <h2 className={styles.days}>FRIDAY</h2>
      <table className={styles.table}>
        <tr>
          <th className={styles.table_title}>TIME</th>
          <th className={styles.table_title}>EVENT</th>
          <th className={styles.table_title}>LOCATION</th>
        </tr>
        <tr>
          <td>16:30</td>
          <td>Doors Open</td>
          <td>Dipoli</td>
        </tr>
        <tr>
          <td>18:00</td>
          <td>Opening Ceremony</td>
          <td>Dipoli</td>
        </tr>
        <tr>
          <td>18:20</td>
          <td>Opening Keynote</td>
          <td>Dipoli</td>
        </tr>
        <tr>
          <td>18:45</td>
          <td>Program: Partner challenge intros</td>
          <td>Dipoli</td>
        </tr>
        <tr>
          <td>18:45</td>
          <td>Team Building</td>
          <td>Dipoli</td>
        </tr>
      </table>

      <h2 className={styles.days}>SATURDAY</h2>
      <table className={styles.table}>
        <tr>
          <th className={styles.table_title}>TIME</th>
          <th className={styles.table_title}>EVENT</th>
          <th className={styles.table_title}>LOCATION</th>
        </tr>
        <tr>
          <td>09:00</td>
          <td>Breakfast</td>
          <td>Dipoli</td>
        </tr>
        <tr>
          <td>10:00</td>
          <td>Program: API Demos, Workshops, Yoga and other</td>
          <td>Dipoli</td>
        </tr>
        <tr>
          <td>12:00</td>
          <td>Lunch</td>
          <td>Dipoli</td>
        </tr>
        <tr>
          <td>13:45</td>
          <td>Program: Workouts, Lighting Talks, Demos, Meetups, Meditation</td>
          <td>Dipoli</td>
        </tr>
        <tr>
          <td>17:00</td>
          <td>Dinner</td>
          <td>Dipoli</td>
        </tr>
        <tr>
          <td>18:30</td>
          <td>Program: Keynotes, Demos, Karaoke</td>
          <td>Dipoli</td>
        </tr>
      </table>

      <h2 className={styles.days}>SUNDAY</h2>
      <table className={styles.table}>
        <tr>
          <th className={styles.table_title}>TIME</th>
          <th className={styles.table_title}>EVENT</th>
          <th className={styles.table_title}>LOCATION</th>
        </tr>
        <tr>
          <td>09:00</td>
          <td>Breakfast</td>
          <td>Dipoli</td>
        </tr>
        <tr>
          <td>10:00</td>
          <td>Seating, Challenge & Track Deadline	</td>
          <td>Dipoli</td>
        </tr>
        <tr>
          <td>12:00</td>
          <td>Devpost Closes</td>
          <td>Dipoli</td>
        </tr>
        <tr>
          <td>12:30</td>
          <td>Demo EXPO opens</td>
          <td>Dipoli</td>
        </tr>
        <tr>
          <td>14:30</td>
          <td>Demo EXPO ends</td>
          <td>Dipoli</td>
        </tr>
        <tr>
          <td>15:00</td>
          <td>Prize Ceremony starts</td>
          <td>Dipoli</td>
        </tr>
        <tr>
          <td>16:00</td>
          <td>Track Winner Demos</td>
          <td>Dipoli</td>
        </tr>
        <tr>
          <td>17:30</td>
          <td>Closing ceremony</td>
          <td>Dipoli</td>
        </tr>
        <tr>
          <td>18:00</td>
          <td>After Party starts!</td>
          <td>Dipoli</td>
        </tr>
      </table>

    </Block>
  </Scroll.Element>;

export default About;
