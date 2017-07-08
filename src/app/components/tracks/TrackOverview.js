import React, { PropTypes } from "react";
export default class TrackOverview extends React.Component {
  // render
  render() {
    var trackOverviewConfig = {
      title: this.props.title,
      image: this.props.image,
      partners: this.props.partners
    };
    return (
      <div>
        <h1>
          {trackOverviewConfig.title}
        </h1>
        <img src={trackOverviewConfig.image} />
        {trackOverviewConfig.partners.map(function(object, i) {
          return (
            <Partner
              name={object.name}
              description={object.description}
              logo={object.logo}
            />
          );
        })}
      </div>
    );
  }
}

// prop checks
TrackOverview.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  partners: PropTypes.object.isRequired
};
