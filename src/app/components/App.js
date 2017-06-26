import React from "react";
import { connect } from "react-redux";
import Menu from "./common/Menu";
import "../stylesheets/main.scss";

// app component
export class App extends React.Component {
  componentWillMount() {
    // the first time we load the app, we need that posts list
    this.props.dispatch({ type: "GET_POSTS" });
  }

  // render
  render() {
    const { posts, children } = this.props;
    if (!posts.length) {
      return (
        <p>
          No post
        </p>
      );
    }

    return (
      <div className="container">
        <div>
          <Menu />
        </div>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    posts: state.posts || []
  };
}
export default connect(mapStateToProps)(App);
