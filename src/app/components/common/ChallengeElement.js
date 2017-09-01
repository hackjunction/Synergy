import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import styles from './ChallengeElement.c.scss';

class ChallengeElement extends Component {
  componentWillMount() {
    if (!this.props.challenges[this.props.post_id]) {
      this.props.getChallenge(this.props.post_id);
    }
  }
  // render
  render() {
    const { title, content, post_id } = this.props;
    var data = {};

    if (this.props.challenges[post_id]) {
      data = this.props.challenges[post_id];
    }

    return (
      <div>
        <Col className={styles.chief + ' ' + styles.collage} xs={12}>
          <Row center="xs" middle="xs">
            <Col xs={8} md={4}>
              {data.image && (
                <img className={styles['partner-logo']} src={data.image} />
              )}
            </Col>
            <Col xs={12} md={8}>
              <h2 className={styles.left}> {title} </h2>
              <p className={styles.left}>{content}</p>
            </Col>
          </Row>

          <Row className={styles.fullwidth}>
            <hr className={styles.fullwidth} />
          </Row>
          <Row className={styles.fullwidth}>
            <Col xs={12} md={3} lg={3}>
              <h3 className={styles.left}> Prize </h3>
              {data.prize && (
                <div>
                  {data.prize.split('|').map(text => {
                    return <p className={styles.left}> {text} </p>;
                  })}
                </div>
              )}
            </Col>
            <Col xs={12} md={6} lg={6}>
              <h3 className={styles.left}> Criteria </h3>
              {data.criteria && (
                <div>
                  {data.criteria.split('|').map(text => {
                    return <p className={styles.left}> {text} </p>;
                  })}
                </div>
              )}
            </Col>
            <Col xs={12} md={3} lg={3}>
              {/*
          <button><i className="fa fa-arrow-right"></i></button>
          */}
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}

// prop checks
ChallengeElement.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  post_id: PropTypes.number,
  challenges: PropTypes.array,
  getChallenge: PropTypes.func,
};

function mapStateToProps(state) {
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

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeElement);
