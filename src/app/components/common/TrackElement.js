import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ElementGridElement from './ElementGridElement'

export default class TrackElement extends Component {
  // render
  render() {
    const { post } = this.props;

    if (post) {
      return (
        <ElementGridElement link={`/tracks/${post.slug}`} content={<h2>{post.title}</h2>} background={post.image}/>
      );
    } else return <div />;
  }
}

// prop checks
TrackElement.propTypes = {
  post: PropTypes.object.isRequired
};
