import React from 'react';
import { Row } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './Job.c.scss';

function Job(props) {
  return (
    <Row className={styles.job_style}>
      <div className={styles.left}>
        <img src={props.job.partner_logo} alt="Partner logo" />
        <div className={styles.intermediate_text}>is looking for a</div>
        <div className={styles.job_title}>{props.job.title}</div>
        <hr className={styles.dividing_rule} />
        <div className={styles.deadline}>
          <div className={styles.intermediate_text}>
            <span>APPLICATION ENDS</span>
          </div>
          <div className={styles.application_end_date}>
            <span className={styles.application_end_date}>{moment(props.job.application_end_date).format('ll')}</span>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.skill_heading}>SKILLS</div>
        <div className={styles.skills}>{props.job.skills}</div>
        {props.job.description_paragraphs.map(paragraph => <p>{paragraph}</p>)}
      </div>
    </Row>
  );
}

Job.propTypes = {
  job: PropTypes.object.isRequired
};

export default Job;
