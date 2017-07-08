import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Partner extends Component {
  // render
  render() {
    const partnerConfig = {
      name: this.props.name,
      logo: this.props.logo,
      description: this.props.description,
    };
    return (
      <div>
        <h1>
          {partnerConfig.name}
        </h1>
        <img src={partnerConfig.logo} />
        <p>
          {partnerConfig.description}
        </p>
      </div>
    );
  }
}

// prop checks
Partner.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
