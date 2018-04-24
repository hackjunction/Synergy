import React from 'react';
import classNames from 'classnames';
import { Grid } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import styles from './Block.c.scss';

const Block = ({ className, contentClassName, children, style, header }) => (
  <div className={classNames([styles.container, className])} style={style}>
    {header}
    <Grid fluid className={classNames([styles.content, contentClassName])}>
      {children}
    </Grid>
  </div>
);

Block.propTypes = {
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
  header: PropTypes.array
};

export default Block;
