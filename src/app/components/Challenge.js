import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Track.c.scss';
import TopNav from './TopNav';

class Challenge extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    var match = this.props.match;
    if (!match.params || !match.params.challenge)
      return;
    var id = match.params.challenge;

    if (!this.props.challenges[id]) {
      this.props.getChallenge(id);
    }
  }

  render() {
    var match = this.props.match;
    if (!match.params || !match.params.challenge) return <Redirect to="/" />;
    if (this.props.challenges.length > 0) {
      var challenge = this.props.challenges.filter(
        challenge => challenge.id == match.params.challenge || challenge.slug === match.params.challenge,
      );
      challenge = challenge[0];
      if(challenge && challenge.status === 404)
        return <Redirect to="/404" />;
    } else challenge = {};
    if(challenge.slug && !isNaN(match.params.challenge)){
      return <Redirect to={`/challenges/${challenge.slug}`} />;
    }


    var style = {
      backgroundImage: `url(${challenge.challenge_bg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };

    return (
      <div className={styles.track_page}>
        <Grid className={styles.hero} fluid>
          <Row style={style} className={styles.background_top} center="xs">
            <Col className={styles.track_name} xs={12} sm={12} md={12} lg={12}>
              <TopNav />
            </Col>
          </Row>

          <Row center="xs" className={styles.track_header}>
            <Col className={styles.track_name} xs={12} sm={12} md={12}>
              <h1>{challenge.title}</h1>
            </Col>
            <Col className={styles.challenge_partner_inline} xs={12} sm={12} md={12}>
              <img src={challenge.image} />
            </Col>
            <Col className={[styles.track_content],[styles.challenge_content]} xs={12} sm={12} md={12}>
              <div dangerouslySetInnerHTML={{ __html: challenge.content }} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

Challenge.propTypes = {
  params: PropTypes.object,
  challenges: PropTypes.array,
  getChallenge: PropTypes.func,
  match: PropTypes.object,
  post_id: PropTypes.number,
};

function mapStateToProps(state) {
  //console.log('challenges', state.challenges);
  return {
    challenges: state.challenges || [],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getChallenge(id) {
      dispatch({ type: 'GET_CHALLENGE', id });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenge);
