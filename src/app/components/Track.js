import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Track.c.scss';
import Challenge from './common/ChallengeElement';

class Track extends Component {
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
      if (track.length === 0) return <Redirect to="/" />;
      else track = track[0];
    } else track = {};

    var style = {
      backgroundImage: `url(${track.image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };

    return (
      <div className={styles.track_page}>
        <Grid className={styles.hero} fluid>
          <Row style={style} className={styles.background_top} center="xs">
            <Col>
              <a href="/#tracks">
                <img
                  className={styles.junction_logo}
                  src="https://staging.hackjunction.com/wp-content/uploads/2017/08/junction_logo-1.png"
                />
              </a>
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
              track.challenges.map(challenge => {
                return (
                  <Challenge
                    key={challenge.id}
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
  getTracks: PropTypes.func,
  match: PropTypes.object,
};

function mapStateToProps(state) {
  //console.log('tracks', state.tracks);
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

export default connect(mapStateToProps, mapDispatchToProps)(Track);
