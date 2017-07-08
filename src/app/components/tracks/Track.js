import React, { PropTypes } from "react";
import Challenge from "../challenges/Challenge";
import Partner from "../partners/partner";

export default class Track extends React.Component {
  // render
  render() {
    var trackConfig = {
      title: this.props.title,
      image: this.props.image,
      chiefPartners: this.props.chiefPartners,
      partners: this.props.partners,
      challenges: this.props.challenges
    };
    return (
      <div>
        <h1>
          {trackConfig.title}
        </h1>
        <img src={trackConfig.image} />
        {trackConfig.chiefPartners.map(function(object, i) {
          return (
            <Partner
              name={object.name}
              description={object.description}
              logo={object.logo}
            />
          );
        })}
        {trackConfig.partners.map(function(object, i) {
          return (
            <Partner
              name={object.name}
              description={object.description}
              logo={object.logo}
            />
          );
        })}
        {trackConfig.challenges.map(function(object, i) {
          return (
            <Challenge
              title={object.title}
              description={object.description}
              image={object.image}
              partners={object.partners}
              criteria={object.criteria}
              prize={object.prize}
              links={object.links}
            />
          );
        })}
      </div>
    );
  }
}

// prop checks
Track.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  partners: PropTypes.object.isRequired,
  chiefPartners: PropTypes.object.isRequired,
  challenges: PropTypes.object.isRequired
};
