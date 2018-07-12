import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './Job.c.scss';

function Job(props) {
  return (
    <Row className={styles.job_style}>
      <Col xs={12} md={4}>
        <div className={styles.left}>
          <img className={styles.partner_logo} src={props.job.partner_logo} alt="Partner logo" />
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
      </Col>
      <Col xs={12} md={8}>
        <div className={styles.right}>
          {props.job.skills ? (
            <div>
              <div className={styles.skill_heading}>SKILLS</div>
              <div className={styles.skills}>{props.job.skills}</div>
            </div>
          ) : null}
          <div dangerouslySetInnerHTML={{ __html: props.job.content }} />
          {props.job.link ? (
            <p className={styles.link}>
              <a target="_blank" rel="noopener noreferrer" href={props.job.link}>
                {' '}
                Read more{' '}
              </a>
            </p>
          ) : null}
        </div>
      </Col>
    </Row>
  );
}

Job.propTypes = {
  job: PropTypes.object.isRequired
};

export default Job;
