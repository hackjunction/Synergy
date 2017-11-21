import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import styles from './BlockHeader.c.scss';

const BlockHeader = ({ title, children: description }) => (
  <Row>
    <Col xs={12} md={5}>
      <h1 className={styles.title}>{title}</h1>
    </Col>
    {!!description && (
      <Col xs={12} md={9}>
        {description}
      </Col>
    )}
  </Row>
);

BlockHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object
};

export default BlockHeader;
