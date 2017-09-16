import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';

import styles from './ChallengeElement.c.scss';

class SimpleChallenge extends Component {
  componentWillMount() {
    if (!this.props.challenges[this.props.post_id]) {
      this.props.getChallenge(this.props.post_id);
    }
  }
  // render
  render() {
    const { title, post_id } = this.props;
    var data = {};

    if (this.props.challenges[post_id]) {
      data = this.props.challenges[post_id];
    }

    return (
      <Col xs={12} md={8}>
        <h2 className={styles.left}> {title} </h2>
        {data.prize && (
          <div>
            {data.prize.split('|').map(text => {
              return (
                <p className={styles.left} key={text}>
                  Prize: {' '}
                  {text}{' '}
                </p>
              );
            })}
          </div>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(SimpleChallenge);
