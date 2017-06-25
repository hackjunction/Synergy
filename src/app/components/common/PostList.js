import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import PostElement from "./PostElement";

// User list component
export class PostList extends React.Component {
  // constructor
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
              <th>ID</th>
              <th>Username</th>
              <th>Job</th>
              <th>Edit</th>
              <th>Delete</th>
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
    users: state.users
  };
}
export default connect(mapStateToProps)(PostList);
