/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react';

class Volunteer extends Component {
  render() {
    var style = {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      border: 0
    };

    return (
      <div>
        <iframe
          style={style}
          id="typeform-full"
          width="100%"
          height="100%"
          frameBorder="0"
          src="https://docs.google.com/forms/d/e/1FAIpQLScu-QdWo6rv4TVZ4mj7b29pS2wwjYwMKA0w-5tfO856Pumq4A/viewform"
        />
        <script type="text/javascript" src="https://embed.typeform.com/embed.js" />
      </div>
    );
  }
}

export default Volunteer;
