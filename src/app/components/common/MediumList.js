import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row } from 'react-flexbox-grid';

import MediumElement from './MediumElement';

class MediumList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // the first time we load the app, we need that posts list
    this.props.dispatch({ type: 'GET_MEDIUM_POSTS' });
  }

  // render
  render() {
    const { mediumPosts } = this.props;
    let posts;
    if (!mediumPosts.length) {
      return <p>No post</p>;
    } else {
      posts = mediumPosts.slice(0, 3);
    }

    // show the list of posts
    return <Row>{posts.map((post, index) => <MediumElement key={index} post={post} />)}</Row>;
  }
}

// prop checks
MediumList.propTypes = {
  dispatch: PropTypes.func,
  mediumPosts: PropTypes.array
};

// export the connected class
function mapStateToProps(state) {
  //console.log('mediumPosts', state.mediumPosts);
  return {
    mediumPosts: state.mediumPosts || []
  };
}

export default connect(mapStateToProps)(MediumList);
