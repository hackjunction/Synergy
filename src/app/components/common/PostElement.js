import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/main.scss';

export default class PostElement extends Component {
  // render
  render() {
    const { post } = this.props;

    return (
      <div className="junction_posts">
        <img src={post.acf.image} alt="" />
        <h2>{post.title.rendered}</h2>
        <p>{post.acf.description}</p>
      </div>
    );
  }
}

// prop checks
PostElement.propTypes = {
  post: PropTypes.object.isRequired
};
