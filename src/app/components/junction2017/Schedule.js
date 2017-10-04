import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styles from "./Schedule.c.scss";
import Block from "../viewBlocks/Block";
import BlockHeader from "../viewBlocks/BlockHeader";

const Schedule = () =>
    <Block className={styles.block} contentClassName={styles.content}>
      <Row>
        <Col xs={12} className="bold text-secondary">
          <h4>SCHEDULE</h4>
        </Col>
      </Row>
      <BlockHeader title="3 DAYS OF AWESOMENESS!" />
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
          <th className={styles.table_title_first_col}>TIME</th>
          <th className={styles.table_title_second_col}>EVENT</th>
          <th className={styles.table_title_third_col}>LOCATION</th>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>16:30</td>
          <td className={styles.table_row_second_col}>Doors Open</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>18:00</td>
          <td className={styles.table_row_second_col}>Opening Ceremony</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>18:20</td>
          <td className={styles.table_row_second_col}>Opening Keynote</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>18:45</td>
          <td className={styles.table_row_second_col}>Program: Partner challenge intros</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>18:45</td>
          <td className={styles.table_row_second_col}>Team Building</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
      </table>

      <h2 className={styles.days}>SATURDAY</h2>
      <table className={styles.table}>
        <tr>
          <th className={styles.table_title_first_col}>TIME</th>
          <th className={styles.table_title_second_col}>EVENT</th>
          <th className={styles.table_title_third_col}>LOCATION</th>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>09:00</td>
          <td className={styles.table_row_second_col}>Breakfast</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>10:00</td>
          <td className={styles.table_row_second_col}>Program: API Demos, Workshops, Yoga and other</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>12:00</td>
          <td className={styles.table_row_second_col}>Lunch</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>13:45</td>
          <td className={styles.table_row_second_col}>Program: Workouts, Lighting Talks, Demos, Meetups, Meditation</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>17:00</td>
          <td className={styles.table_row_second_col}>Dinner</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>18:30</td>
          <td className={styles.table_row_second_col}>Program: Keynotes, Demos, Karaoke</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
      </table>

      <h2 className={styles.days}>SUNDAY</h2>
      <table className={styles.table}>
        <tr>
          <th className={styles.table_title_first_col}>TIME</th>
          <th className={styles.table_title_second_col}>EVENT</th>
          <th className={styles.table_title_third_col}>LOCATION</th>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>09:00</td>
          <td className={styles.table_row_second_col}>Breakfast</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>10:00</td>
          <td className={styles.table_row_second_col}>Seating, Challenge & Track Deadline	</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>12:00</td>
          <td className={styles.table_row_second_col}>Devpost Closes</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>12:30</td>
          <td className={styles.table_row_second_col}>Demo EXPO opens</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>14:30</td>
          <td className={styles.table_row_second_col}>Demo EXPO ends</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>15:00</td>
          <td className={styles.table_row_second_col}>Prize Ceremony starts</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>16:00</td>
          <td className={styles.table_row_second_col}>Track Winner Demos</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>17:30</td>
          <td className={styles.table_row_second_col}>Closing ceremony</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
        <tr>
          <td className={styles.table_row_first_col}>18:00</td>
          <td className={styles.table_row_second_col}>After Party starts!</td>
          <td className={styles.table_row_third_col}>Dipoli</td>
        </tr>
      </table>

    </Block>;

export default Schedule;
