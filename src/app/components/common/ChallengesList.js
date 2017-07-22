import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChallengeElement from './ChallengeElement';

class ChallengesList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // the first time we load the app, we need that challenges list
    this.props.dispatch({ type: 'GET_CHALLENGES' });
  }

  // render
  render() {
    const { challenges } = this.props;

    if (!challenges.length) {
      return <p>No post</p>;
    }

    // show the list of challenges
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {challenges.map((post, index) =>
              <ChallengeElement key={index} post={post} />,
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

// prop checks
ChallengesList.propTypes = {
  dispatch: PropTypes.func,
  challenges: PropTypes.array,
};

// export the connected class
function mapStateToProps(state) {
  console.log('challenges', state.challenges);
  return {
    challenges: state.challenges || [],
  };
}

export default connect(mapStateToProps)(ChallengesList);
