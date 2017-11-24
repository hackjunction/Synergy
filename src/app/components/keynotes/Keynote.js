import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Keynote extends Component {
  // render
  render() {
    const keynoteConfig = {
      name: this.props.name,
      image: this.props.image,
      description: this.props.description,
      link: this.props.link
    };
    return (
      <div>
        <h1>{keynoteConfig.name}</h1>
        <img src={keynoteConfig.image} alt="" />
        <p>{keynoteConfig.description}</p>
        <p>{keynoteConfig.link}</p>
      </div>
    );
  }
}

// prop checks
Keynote.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
