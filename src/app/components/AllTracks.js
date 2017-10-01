import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Track.c.scss';
import TitleMod from './TitleMod';
// import Challenge from './challenges/Challenge';
import SimpleChallenge from './common/SimpleChallengeElement';
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
        {tracks.map(track => {
          return (
            <div className={[styles.track_page],[styles.all_tracks]} key={track.id}>
                <Row className={styles.track_header}>
                  <Col className={styles.track_name} xs={12} sm={12} md={12}>
                    <h1>{track.title}</h1>
                  </Col>
                  {track.challenges &&
                    track.challenges.map(challenge => {
                      return (
                        <SimpleChallenge
                          key={challenge.id}
                          title={challenge.title}
                          content={challenge.content}
                          post_id={challenge.id}
                        />
                      );
                    })}
                </Row>
            </div>
          );
        })}
        </Grid>
    );
  }
}

AllTracks.propTypes = {
  params: PropTypes.object,
  tracks: PropTypes.array,
  getTracks: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    tracks: state.tracks || [],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTracks() {
      dispatch({ type: 'GET_TRACKS' });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTracks);
