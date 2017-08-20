import React from 'react';

import './landing/landing.scss';
import Welcome from './landing/Welcome';
import About from './landing/About';
import Tracks from './landing/Tracks';
import Partners from './landing/Partners';
import Hacktalks from './landing/Hacktalks';
import Media from './landing/Media';
import Pictures from './landing/Pictures';
import Footer from './landing/Footer';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <div id="welcome">
          <Welcome />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="tracks">
          <Tracks />
        </div>
        <div id="partners">
          <Partners />
        </div>
        <div id="hacktalks">
          <Hacktalks />
        </div>
        <div id="media">
          <Media />
        </div>
        <div id="pictures">
          <Pictures />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Landing;
