import React from 'react';
import classNames from 'classnames';
import { Grid } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import styles from './Block.c.scss';

const Block = ({ className, contentClassName, children }) => (
  <div className={classNames([styles.container, className])}>
    <Grid fluid className={classNames([styles.content, contentClassName])}>
      {children}
    </Grid>
  </div>
);

Block.propTypes = {
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  children: PropTypes.node
};

export default Block;
