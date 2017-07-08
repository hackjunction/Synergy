import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostElement from "./PostElement";

export class PostList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // the first time we load the app, we need that posts list
    this.props.dispatch({ type: "GET_POSTS" });
  }

  // render
  render() {
    const { posts } = this.props;

    if (!posts.length) {
      return <p>No post</p>;
    }

    // show the list of posts
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) =>
              <PostElement key={index} post={post} />,
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

// prop checks
PostList.propTypes = {
  dispatch: PropTypes.func,
  posts: PropTypes.object,
};

// export the connected class
function mapStateToProps(state) {
  return {
    posts: state.posts || [],
  };
}
export default connect(mapStateToProps)(PostList);
