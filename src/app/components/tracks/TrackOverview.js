import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Partner from '../partners/Partner';

export default class TrackOverview extends Component {
  // render
  render() {
    const trackOverviewConfig = {
      title: this.props.title,
      image: this.props.image,
      partners: this.props.partners,
    };
    return (
      <div>
        <h1>
          {trackOverviewConfig.title}
        </h1>
        <img src={trackOverviewConfig.image} />
        {trackOverviewConfig.partners.map((object, i) => (
          <Partner
            key={i}
            name={object.name}
            description={object.description}
            logo={object.logo}
          />
        ))}
      </div>
    );
  }
}

// prop checks
TrackOverview.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  partners: PropTypes.object.isRequired,
};
