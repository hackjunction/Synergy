import React, { PropTypes } from "react";
export default class Partner extends React.Component {
  // render
  render() {
    var partnerConfig = {
      name: this.props.name,
      logo: this.props.logo,
      description: this.props.description
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
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
