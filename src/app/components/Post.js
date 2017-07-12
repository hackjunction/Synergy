import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { PostList } from "./common/PostList";

class Post extends Component {
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
    return <PostList />;
  }
}

// prop checks
Post.propTypes = {
  dispatch: PropTypes.func,
  posts: PropTypes.object,
};

// export the connected class
function mapStateToProps(state) {
  return {
    posts: state.posts || [],
  };
}
// I guess it should be Post at the end but it's working with PostList only
export default connect(mapStateToProps)(PostList);
