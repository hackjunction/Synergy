import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './ElementGrid.c.scss';

export default class ElementGridElement extends Component {
  // render
  render() {
    const { link, background, content } = this.props;

    var style;
    if(background){
      style = {
        'backgroundImage': `url(${background})`
      };
    }
          return (
      <Link to={link}>
        <div className={`responsive ${styles.trackCell}`} style={style}>
          <div className={styles.awesome_overlay}>
            <div className={styles.inside}>
              {content}
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

// prop checks
ElementGridElement.propTypes = {
  link: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired
};
