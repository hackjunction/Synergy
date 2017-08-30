import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import styles from './MediumElement.c.scss';

export default class MediumElement extends Component {
  // render
  render() {
    const { post } = this.props;

    return (
      <Col xs={12} sm={6} md={4} lg={4} className={styles.block}>
        <div className={styles.fixed}>
        <a href={post.link} className="medium_post_link">
          <img src={post.images} className={styles.content} />
        </a>
        </div>

        <div className="medium_post_title">
          <h3 className={styles.medium_title}>
            {post.title}
          </h3>
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
