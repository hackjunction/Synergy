import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Track.c.scss';
import Challenge from './common/ChallengeElement';
import TopNav from './TopNav';

class Track extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    if (this.props.tracks.length == 0) {
      this.props.getTracks();
    }
  }

  render() {
    var match = this.props.match;
    if (!match.params || !match.params.track) return <Redirect to="/" />;
    if (this.props.tracks.length > 0) {
      var track = this.props.tracks.filter(
        track => track.slug === match.params.track,
      );
      if (track.length === 0) return <Redirect to="/404" />;
      else track = track[0];
    } else track = {};

    var style = {
      backgroundImage: `url(${track.image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };

    return (
      <div className={styles.track_page}>
        <Grid className={styles.hero} fluid>
          <Row style={style} className={styles.background_top}>
            <Col className={styles.track_name} xs={12} sm={12} md={12} lg={12}>
              <TopNav />
            </Col>
          </Row>
          <Row center="xs" className={styles.track_header}>
            <Col className={styles.track_name} xs={12} sm={12} md={12}>
              <h1>{track.title}</h1>
            </Col>
            <Col className={styles.track_content} xs={12} sm={12} md={12}>
              <div dangerouslySetInnerHTML={{ __html: track.content }} />
            </Col>

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
          </Row>
        </Grid>
      </div>
    );
  }
}

Track.propTypes = {
  params: PropTypes.object,
  tracks: PropTypes.array,
  challenges: PropTypes.array,
  getTracks: PropTypes.func,
  match: PropTypes.object,
};

function mapStateToProps(state) {
  //console.log('tracks', state.tracks);
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Track);
