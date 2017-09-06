import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Track.c.scss';

class Challenge extends Component {
  componentWillMount() {
    if (this.props.challenges.length == 0) {
      this.props.getChallenges();
    }
  }

  render() {
    var match = this.props.match;
    if (!match.params || !match.params.challenge) return <Redirect to="/" />;
    if (this.props.challenges.length > 0) {
      var challenge = this.props.challenges.filter(
        challenge => challenge.id == match.params.challenge,
      );
      challenge = challenge[0];
    } else challenge = {};

    console.log(challenge);
    var style = {
      backgroundImage: `url(${challenge.challenge_bg})`,
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
              <h1>{challenge.title}</h1>
            </Col>
            <Col className={styles.challenge_partner_inline} xs={12} sm={12} md={12}>
              <img src={challenge.image} />
            </Col>
            <Col className={[styles.track_content],[styles.challenge_content]} xs={12} sm={12} md={12}>
              <div dangerouslySetInnerHTML={{ __html: challenge.content }} />
            </Col>
            <a href="https://register.hackjunction.com/">
              <button className={styles.apply_button}>APPLY</button>
            </a>
          </Row>
        </Grid>
      </div>
    );
  }
}

Challenge.propTypes = {
  params: PropTypes.object,
  challenges: PropTypes.array,
  getChallenges: PropTypes.func,
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
    getChallenges() {
      dispatch({ type: 'GET_CHALLENGES' });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenge);
