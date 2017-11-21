import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styles from './Schedule.c.scss';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';

const Schedule = () => (
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
          From food and drinks, to keynotes, workshops and satelite happenings, for all your needs and purposes, we got
          it. <br />Keep checking the schedule for changes and additions to our hectic program for the weekend!
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
        <td className={styles.table_row_third_col}>Dipoli Main Doors</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>18:00</td>
        <td className={styles.table_row_second_col}>Opening Ceremony</td>
        <td className={styles.table_row_third_col}>Main Stage</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>18:20</td>
        <td className={styles.table_row_second_col}>Opening Keynote</td>
        <td className={styles.table_row_third_col}>Main Stage</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>18:30</td>
        <td className={styles.table_row_second_col}>Program: Partner challenge intros</td>
        <td className={styles.table_row_third_col}>Main Stage</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>20:00</td>
        <td className={styles.table_row_second_col}>Team Building</td>
        <td className={styles.table_row_third_col}>Track Area</td>
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
        <td className={styles.table_row_third_col}>Food Area</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>09:00</td>
        <td className={styles.table_row_second_col}>Yoga</td>
        <td className={styles.table_row_third_col}>Design Factory</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>10:00</td>
        <td className={styles.table_row_second_col}>Mindfulness</td>
        <td className={styles.table_row_third_col}>Keynote Stage</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>10:00</td>
        <td className={styles.table_row_second_col}>Launchpad</td>
        <td className={styles.table_row_third_col}>Tent</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>10:00</td>
        <td className={styles.table_row_second_col}>Meeting Area</td>
        <td className={styles.table_row_third_col}>Tent</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>12:00</td>
        <td className={styles.table_row_second_col}>Lunch</td>
        <td className={styles.table_row_third_col}>Food Area</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>14:00</td>
        <td className={styles.table_row_second_col}>Public Speaking Workshop + Open Mic</td>
        <td className={styles.table_row_third_col}>Keynote Stage</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>15:30</td>
        <td className={styles.table_row_second_col}>Spotify Workshop</td>
        <td className={styles.table_row_third_col}>Dipoli</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>16:30</td>
        <td className={styles.table_row_second_col}>Keynotes</td>
        <td className={styles.table_row_third_col}>Keynote Stage</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>17:00</td>
        <td className={styles.table_row_second_col}>Dinner</td>
        <td className={styles.table_row_third_col}>Food Area</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>18:00</td>
        <td className={styles.table_row_second_col}>Hackathon Organizer Meetup</td>
        <td className={styles.table_row_third_col}>Design Factory</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>20:00</td>
        <td className={styles.table_row_second_col}>Code in the dark</td>
        <td className={styles.table_row_third_col}>Keynote Stage</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>20:00</td>
        <td className={styles.table_row_second_col}>After Work at Radisson</td>
        <td className={styles.table_row_third_col}>Radisson Hotel</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>21:00</td>
        <td className={styles.table_row_second_col}>Skinny Dipping with KY-Sub</td>
        <td className={styles.table_row_third_col}>-</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>22:00</td>
        <td className={styles.table_row_second_col}>Karaoke and Fun!</td>
        <td className={styles.table_row_third_col}>Keynote Stage</td>
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
        <td className={styles.table_row_third_col}>Food Area</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>10:00</td>
        <td className={styles.table_row_second_col}>DevPost Closes: Seating, Challenge & Track Deadline</td>
        <td className={styles.table_row_third_col}>Dipoli</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>12:00</td>
        <td className={styles.table_row_second_col}>Demo EXPO Opens</td>
        <td className={styles.table_row_third_col}>Dipoli</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>14:30</td>
        <td className={styles.table_row_second_col}>Demo EXPO ends</td>
        <td className={styles.table_row_third_col}>Dipoli</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>15:00</td>
        <td className={styles.table_row_second_col}>Prize Ceremony Starts</td>
        <td className={styles.table_row_third_col}>Main Stage</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>15:05</td>
        <td className={styles.table_row_second_col}>Challenge Winner Announcements</td>
        <td className={styles.table_row_third_col}>Main Stage</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>15:45</td>
        <td className={styles.table_row_second_col}>Track/Pool Winner Demos</td>
        <td className={styles.table_row_third_col}>Main Stage</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>17:00</td>
        <td className={styles.table_row_second_col}>Closing ceremony</td>
        <td className={styles.table_row_third_col}>Main Stage</td>
      </tr>
      <tr>
        <td className={styles.table_row_first_col}>18:00</td>
        <td className={styles.table_row_second_col}>After Party starts!</td>
        <td className={styles.table_row_third_col}>Secret!</td>
      </tr>
    </table>
  </Block>
);

export default Schedule;
