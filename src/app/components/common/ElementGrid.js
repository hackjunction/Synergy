import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './ElementGrid.c.scss';

export default class ElementGrid extends Component {
  // render
  render() {
    const { grid, elements } = this.props;
    var i = 0;
    return (<div>
      {grid.map((row, rowI) => {
        return (
          <Row height={1} key={rowI} className={styles.grid_row} center="xs">
            {row.map((width, colI) => {
              var element = (
                <Col xs={12} key={colI} md={width} lg={width}>
                  { elements[i] ? elements[i] : <div />}
                </Col>
              );
              i += 1;
              return element;
            })}
          </Row>
        );
      })}
    </div>);
  }
}

// prop checks
ElementGrid.propTypes = {
  grid: PropTypes.array.isRequired,
  elements: PropTypes.array.isRequired
};
