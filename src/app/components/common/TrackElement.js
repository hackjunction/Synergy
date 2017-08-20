import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TrackElement extends Component {
  // render
  render() {
    const { post } = this.props;
    const style = {
      "background": `url(${post.image})`
    };

    return (
      <div style={style}>
            {post.title}
            {post.content}
      </div>
    );
  }
}

// prop checks
TrackElement.propTypes = {
  post: PropTypes.object.isRequired,
};
