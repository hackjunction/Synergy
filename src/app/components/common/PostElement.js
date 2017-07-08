import React, { PropTypes } from "react";
export default class PostElement extends React.Component {
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
  post: PropTypes.object.isRequired
};
