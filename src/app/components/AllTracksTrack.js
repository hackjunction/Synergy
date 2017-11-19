import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Track.c.scss';
import TitleMod from './TitleMod';
// import Challenge from './challenges/Challenge';
import SimpleChallenge from './common/SimpleChallengeElement';

class AllTracksTrack extends Component {
  componentWillMount() {
    var track = this.props.track;
    if(track.challenges){
      track.challenges.forEach(challenge => {
        if(!this.props.challenges[challenge.id]){
          this.props.getChallenge(challenge.id);
        }
      })
    }
  }

  render() {
            /*              track.challenges.filter(challenge => (this.props.challenges[challenge.id] ? this.props.challenges[challenge.id].challenge_type === 3 : true))
*/
    return (
      return (
      <div className={[styles.track_page],[styles.all_tracks]} key={track.id}>
          <Row className={styles.track_header}>
            <Col className={styles.track_name} xs={12} sm={12} md={12}>
              <a href={`tracks/${track.slug}`}><h1>{track.title}</h1></a>
            </Col>
            {track.challenges &&
              track.challenges.sort((challenge1, challenge2) => {
                if(this.props.challenges[challenge1.id] && this.props.challenges[challenge2.id])
                  return Number(this.props.challenges[challenge2.id].challenge_type) -
                         Number(this.props.challenges[challenge1.id].challenge_type);
                else return 0;
              })
              .map(challenge => {
                return (
                  <SimpleChallenge
                    key={challenge.id}
                    title={challenge.title}
                    content={challenge.content}
                    post_id={challenge.id}
                  />
                );
              })}
              <Col xs={12} md={12}>
                <hr className={styles.separator}></hr>
              </Col>
          </Row>
      </div>
    );
  }
}

AllTracks.propTypes = {
  params: PropTypes.object,
  tracks: PropTypes.array,
  getChallenge: PropTypes.func,
  challenges: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    challenges: state.challenges
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getChallenge(id) {
      dispatch({ type: 'GET_CHALLENGE', id });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTracks);
