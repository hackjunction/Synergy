import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MediumElement extends Component {
  // render
  render() {
    const { post } = this.props;

    return (
      <tr>
        <td>
          {post.title}
        </td>
        <td>
          {post.content}
        </td>
      </tr>
    );
  }
}

// prop checks
MediumElement.propTypes = {
  post: PropTypes.object.isRequired,
};
