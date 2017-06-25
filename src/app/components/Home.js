import React from "react";
import PostList from "./common/PostList";

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <h4>Hello world!</h4>
        <PostList />
      </div>
    );
  }
}
