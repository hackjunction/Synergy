import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import classNames from 'classnames';
//import { Grid, Row, Col } from "react-flexbox-grid";

import styles from './TrackElement.c.scss';

export default class TrackElement extends Component {
  // render
  render() {
    const { post } = this.props;

    if (post) {
      const style = {
        'background-image': `url(${post.image})`,
      };

      return (
        <Link to={`/${post.slug}`}>
          <div className={`responsive ${styles.trackCell}`} style={style}>
            <div className={styles.inside}>
              <h2>
                {post.title}
              </h2>
            </div>

            {/*{post.title}
                {post.content}
                */}
          </div>
        </Link>
      );
    } else return <div />;
  }
}

// prop checks
TrackElement.propTypes = {
  post: PropTypes.object.isRequired,
};
