import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Challenge from './common/ChallengeElement';

class TrackChallenges extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    var track = this.props.track;
    if(track.challenges){
      track.challenges.forEach(challenge => {
        if(!this.props.challenges[challenge.id]){
          this.props.getChallenge(challenge.id);
        }
      });
    }
  }

  render() {
    var track = this.props.track;

    return (
      <div>
        {track.challenges &&
          track.challenges.sort((challenge1, challenge2) => {
            if(this.props.challenges[challenge1.id] && this.props.challenges[challenge2.id])
              return Number(this.props.challenges[challenge2.id].challenge_type) -
                     Number(this.props.challenges[challenge1.id].challenge_type);
            else return 0;
          }).map(challenge => {
            return (
              <Challenge
                key={challenge.id}
                slug={challenge.slug}
                title={challenge.title}
                content={challenge.content}
                post_id={challenge.id}
              />
            );
          })}
      </div>
    );
  }
}

TrackChallenges.propTypes = {
  track: PropTypes.object,
  challenges: PropTypes.array,
  getChallenge: PropTypes.func,
};

function mapStateToProps(state) {
  //console.log('tracks', state.tracks);
  return {
    tracks: state.tracks || [],
    challenges: state.challenges,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getChallenge(id) {
      dispatch({ type: 'GET_CHALLENGE', id });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackChallenges);
