import React, { Component } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Track.c.scss';
import TitleMod from './TitleMod';
// import Challenge from './challenges/Challenge';
import AllTracksTrack from './AllTracksTrack';
import TopNav from './TopNav';

class AllTracks extends Component {
  componentWillMount() {
    if (this.props.tracks.length == 0) {
      this.props.getTracks();
    }
  }

  render() {
    const { tracks } = this.props;
    return (
      <Grid className={styles.hero} fluid>
        <TopNav />
        <Row className={styles.background_top} center="xs">
          <TitleMod />
        </Row>
        {tracks.map((track, i) => {
          return <AllTracksTrack key={i} track={track} />;
        })}
      </Grid>
    );
  }
}

AllTracks.propTypes = {
  params: PropTypes.object,
  tracks: PropTypes.array,
  getTracks: PropTypes.func,
  getChallenges: PropTypes.func,
  challenges: PropTypes.array,
};


function mapStateToProps(state) {
  return {
    tracks: state.tracks || [],
    challenges: state.challenges
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTracks() {
      dispatch({ type: 'GET_TRACKS' });
    },
    getChallenges() {
      dispatch({ type: 'GET_CHALLENGES' });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTracks);
