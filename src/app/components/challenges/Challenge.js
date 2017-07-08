import React, { Component } from "react";
import PropTypes from "prop-types";
import Partner from "../partners/Partner";

export default class Challenge extends Component {
  // render
  render() {
    var challengeConfig = {
      title: this.props.title,
      image: this.props.image,
      partners: this.props.partners,
      description: this.props.description,
      criteria: this.props.criteria,
      prize: this.props.prize,
      links: this.props.links
    };
    return (
      <div>
        <h1>
          {challengeConfig.title}
        </h1>
        <img src={challengeConfig.image} />
        {challengeConfig.partners.map(function(object, i) {
          return (
            <Partner
              key={i}
              name={object.name}
              description={object.description}
              logo={object.logo}
            />
          );
        })}
        <p>
          {challengeConfig.criteria}
        </p>
        <p>
          {challengeConfig.prize}
        </p>
        {challengeConfig.links.map(function(object, i) {
          return (
            <p key={i}>{object.name}</p>
          );
        })}
      </div>
    );
  }
}

// prop checks
Challenge.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  partners: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  criteria: PropTypes.string.isRequired,
  prize: PropTypes.string.isRequired,
  links: PropTypes.string.isRequired
};
