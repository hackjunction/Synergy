import React from "react";
import { Row, Col } from "react-flexbox-grid";
import PropTypes from "prop-types";
import styles from "./Block.c.scss";

const Block = ({ children }) =>
  <Row>
    <Col xs={12}>
      {children}
    </Col>
  </Row>;

Block.propTypes = {
  children: PropTypes.node,
};

export default Block;
