import React from "react";
import { Row, Col } from "react-flexbox-grid";
import PropTypes from "prop-types";
import styles from "./BlockHeader.c.scss";

const BlockHeader = ({ title, children: description }) =>
  <Row>
    <Col md={5}>
      <h1 className={styles.title}>
        {title}
      </h1>
    </Col>
    <Col md={9}>
      <p>
        {description}
      </p>
    </Col>
  </Row>;

BlockHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
};

export default BlockHeader;
