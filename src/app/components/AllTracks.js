import React, { Component } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Track.c.scss';
import TitleMod from './TitleMod';
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
          <TitleMod title={"TRACKS FROM 2017"}/>
        </Row>
        {tracks.map((track, i) => {
          return <AllTracksTrack key={i} track={track} />;
        })}
      </Grid>
    );
  }
}

AllTracks.propTypes = {
  tracks: PropTypes.array,
  getTracks: PropTypes.func
};

function mapStateToProps(state) {
  return {
    tracks: state.tracks || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTracks() {
      dispatch({ type: 'GET_TRACKS' });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTracks);
