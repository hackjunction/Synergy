import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PostElement extends Component {
  // render
  render() {
    const { post } = this.props;

    return (
      <tr>
        <td>
          {post.title.rendered}
        </td>
        <td>
          {post.content.rendered}
        </td>
      </tr>
    );
  }
}

// prop checks
PostElement.propTypes = {
  post: PropTypes.object.isRequired,
};
