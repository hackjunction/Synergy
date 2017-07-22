import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TrackElement from './TrackElement';

class TracksList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // the first time we load the app, we need that tracks list
    this.props.dispatch({ type: 'GET_TRACKS' });
  }

  // render
  render() {
    const { tracks } = this.props;

    if (!tracks.length) {
      return <p>No post</p>;
    }

    // show the list of tracks
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
            {tracks.map((post, index) =>
              <TrackElement key={index} post={post} />,
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

// prop checks
TracksList.propTypes = {
  dispatch: PropTypes.func,
  tracks: PropTypes.array,
};

// export the connected class
function mapStateToProps(state) {
  console.log('tracks', state.tracks);
  return {
    tracks: state.tracks || [],
  };
}

export default connect(mapStateToProps)(TracksList);
