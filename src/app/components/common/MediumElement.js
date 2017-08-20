import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';

export default class MediumElement extends Component {
  // render
  render() {
    const { post } = this.props;

    return (
      <Col xs={4} className="medium_post">
        <img src={post.images} className="medium_post_pictures" />
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
      </Col>
    );
  }
}

// prop checks
MediumElement.propTypes = {
  post: PropTypes.object.isRequired,
};
