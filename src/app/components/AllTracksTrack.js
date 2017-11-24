import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Track.c.scss';
// import Challenge from './challenges/Challenge';
import SimpleChallenge from './common/SimpleChallengeElement';

class AllTracksTrack extends Component {
  componentWillMount() {
    var track = this.props.track;
    if (track.challenges) {
      track.challenges.forEach(challenge => {
        if (!this.props.challenges[challenge.id]) {
          this.props.getChallenge(challenge.id);
        }
      });
    }
  }

  render() {
    /*              track.challenges.filter(challenge => (this.props.challenges[challenge.id] ? this.props.challenges[challenge.id].challenge_type === 3 : true))
*/
    var track = this.props.track;
    return (
      <div className={([styles.track_page], [styles.all_tracks])} key={track.id}>
        <Row className={styles.track_header}>
          <Col className={styles.track_name} xs={12} sm={12} md={12}>
            <a href={`tracks/${track.slug}`}>
              <h1>{track.title}</h1>
            </a>
          </Col>
          {track.challenges &&
            track.challenges
              .filter(challenge => {
                return this.props.challenges[challenge.id]
                  ? this.props.challenges[challenge.id].challenge_type !== '1'
                  : true;
              })
              .sort((challenge1, challenge2) => {
                if (this.props.challenges[challenge1.id] && this.props.challenges[challenge2.id])
                  return (
                    Number(this.props.challenges[challenge2.id].challenge_type) -
                    Number(this.props.challenges[challenge1.id].challenge_type)
                  );
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
            <a href={`tracks/${track.slug}`}>
              <span className={styles.text_highlight}>SHOW ALL {track.title} CHALLENGES</span>
            </a>
            <hr className={styles.separator} />
          </Col>
        </Row>
      </div>
    );
  }
}

AllTracksTrack.propTypes = {
  track: PropTypes.object,
  getChallenge: PropTypes.func,
  challenges: PropTypes.array
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTracksTrack);
