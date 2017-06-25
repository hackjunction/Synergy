import React from "react";
import { connect } from "react-redux";
import "../stylesheets/main.scss";

// app component
export class App extends React.Component {
  componentWillMount() {
    // the first time we load the app, we need that users list
    this.props.dispatch({ type: "GET_POSTS" });
  }

  // render
  render() {
    const { posts, children } = this.props;
    console.log(posts);
    console.log(children);

    return (
      <div className="container">
        {children}
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
