import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './ChallengeElement.c.scss';

class SimpleChallenge extends Component {
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
      <Col xs={12} md={12}>
        <Link to={`/challenges/${data.id}`} key={data.id}>
          <Row center="xs">
            <Col xs={12} md={4}>
              {data.image && <img className={styles.simple_challenge_logo} src={data.image} alt="" />}
            </Col>
            <Col xs={12} md={8}>
              <h2 className={styles.left}> {title} </h2>
              <p className={styles.left}> {content} </p>
              {data.prize && (
                <div>
                  {data.prize.split('|').map(text => {
                    return (
                      <p className={styles.left} key={text}>
                        <b>Prize:</b> {text} <br />
                        <a href={`/challenges/${data.id}`}>
                          <span className={styles.text_highlight}>READ MORE</span>
                        </a>
                      </p>
                    );
                  })}
                </div>
              )}
            </Col>
          </Row>
        </Link>
      </Col>
    );
  }
}

// prop checks
SimpleChallenge.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  post_id: PropTypes.number,
  challenges: PropTypes.array,
  getChallenge: PropTypes.func
};

function mapStateToProps(state) {
  return {
    challenges: state.challenges || []
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getChallenge(id) {
      dispatch({ type: 'GET_CHALLENGE', id });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleChallenge);
