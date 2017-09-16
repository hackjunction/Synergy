import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Track.c.scss';
// import Challenge from './challenges/Challenge';
import SimpleChallenge from './common/SimpleChallengeElement';

class AllTracks extends Component {
  componentWillMount() {
    console.log('coucou');
    if (this.props.tracks.length == 0) {
      this.props.getTracks();
    }
  }

  render() {
    const { tracks } = this.props;
    return (
      <div>
        <Grid className={styles.hero} fluid>
          <Row className={styles.background_top} center="xs">
            <Col>
              <a href="/#tracks">
                <img
                  className={styles.junction_logo}
                  src="https://staging.hackjunction.com/wp-content/uploads/2017/08/junction_logo-1.png"
                />
              </a>
            </Col>
          </Row>
        {tracks.map(track => {
          return (
            <div className={styles.track_page} key={track.id}>
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
      </div>
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
