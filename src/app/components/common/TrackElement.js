import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TrackElement extends Component {
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
TrackElement.propTypes = {
  post: PropTypes.object.isRequired,
};
