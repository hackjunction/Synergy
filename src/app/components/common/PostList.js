import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostElement from './PostElement';

class PostList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // the first time we load the app, we need that posts list
    this.props.dispatch({ type: 'GET_POSTS' });
  }

  // render
  render() {
    const { posts } = this.props;

    if (!posts.length) {
      return <p>No post</p>;
    }

    // show the list of posts
    return (
      <Grid fluid>
        <Row>
          {posts.map((post, index) => (
            <Col xs={3}>
              <PostElement key={index} post={post} />,
            </Col>
          ))}
        </Row>
      </Grid>
    );
  }
}

// prop checks
PostList.propTypes = {
  dispatch: PropTypes.func,
  posts: PropTypes.array
};

// export the connected class
function mapStateToProps(state) {
  //console.log('posts', state.posts);
  return {
    posts: state.posts || []
  };
}

export default connect(mapStateToProps)(PostList);
