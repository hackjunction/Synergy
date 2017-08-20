import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import styles from './MediumElement.c.scss';

export default class MediumElement extends Component {
  // render
  render() {
    const { post } = this.props;

    return (
      <Col xs={12} md={4} lg={4} className={styles.block}>
        <div className={styles.fixed}>
          <img src={post.images} className={styles.content} />
        </div>

        <div className="medium_post_title">
          <h2>
            {post.title}
          </h2>
        </div>
        <div className="medium_post_content">
          <p>
            {post.content}
          </p>
        </div>
        <a href={post.link} className="medium_post_link">
          READ MORE
        </a>
      </Col>
    );
  }
}

// prop checks
MediumElement.propTypes = {
  post: PropTypes.object.isRequired,
};
