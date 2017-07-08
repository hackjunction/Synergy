import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Challenge from '../challenges/Challenge';
import Partner from '../partners/Partner';

export default class Track extends Component {
  // render
  render() {
    const trackConfig = {
      title: this.props.title,
      image: this.props.image,
      chiefPartners: this.props.chiefPartners,
      partners: this.props.partners,
      challenges: this.props.challenges,
    };
    return (
      <div>
        <h1>
          {trackConfig.title}
        </h1>
        <img src={trackConfig.image} />
        {trackConfig.chiefPartners.map((object, i) => (
          <Partner
            key={i}
            name={object.name}
            description={object.description}
            logo={object.logo}
          />
        ))}
        {trackConfig.partners.map((object, i) => (
          <Partner
            key={i}
            name={object.name}
            description={object.description}
            logo={object.logo}
          />
        ))}
        {trackConfig.challenges.map((object, i) => (
          <Challenge
            key={i}
            title={object.title}
            description={object.description}
            image={object.image}
            partners={object.partners}
            criteria={object.criteria}
            prize={object.prize}
            links={object.links}
          />
        ))}
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
  challenges: PropTypes.object.isRequired,
};
