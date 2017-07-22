import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

    if (!mediumPosts.length) {
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
            {mediumPosts.map((post, index) =>
              <MediumElement key={index} post={post} />,
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

// prop checks
MediumList.propTypes = {
  dispatch: PropTypes.func,
  mediumPosts: PropTypes.array,
};

// export the connected class
function mapStateToProps(state) {
  console.log('mediumPosts', state.mediumPosts);
  return {
    mediumPosts: state.mediumPosts || [],
  };
}

export default connect(mapStateToProps)(MediumList);
