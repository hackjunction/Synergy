import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import PostElement from "./PostElement";

export class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  // render
  render() {
    const { posts } = this.props;

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
            {posts.map((post, index) => {
              return <PostElement key={index} post={post} />;
            })}
          </tbody>
        </table>

      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
export default connect(mapStateToProps)(PostList);
