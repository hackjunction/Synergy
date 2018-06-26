import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './ElementGrid.c.scss';

export default class ElementGridElement extends Component {
  // render
  render() {
    const { link, background, content, outside, hoverStyle, insideStyle } = this.props;

    var style;
    if (background) {
      style = {
        backgroundImage: `url(${background})`
      };
    }
    var element = (
      <div className={`responsive ${styles.trackCell}`} style={style}>
        <div className={`${hoverStyle ? hoverStyle : ''} ${styles.awesome_overlay}`}>
          <div className={`${insideStyle ? insideStyle : ''} ${styles.inside}`}>{content}</div>
        </div>
      </div>
    );
    if (!outside) return <Link to={link}>{element}</Link>;
    else {
      return <a href={link}>{element}</a>;
    }
  }
}

// prop checks
ElementGridElement.propTypes = {
  link: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  outside: PropTypes.object,
  hoverStyle: PropTypes.string,
  insideStyle: PropTypes.string,
  background: PropTypes.string
};
