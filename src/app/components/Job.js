import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import styles from './Job.c.scss';

function Job(props) {
  return (
    <Row className={styles.job_style}>
      <Col xs={12} sm={12} md={12}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </Col>
    </Row>
  );
}

Job.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Job;
