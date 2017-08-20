import React from "react";
import "./landing/landing.scss";

import Welcome from "./landing/Welcome";
import About from "./landing/About";
import Events from "./landing/Events";
import Tracks from "./landing/Tracks";
import Partners from "./landing/Partners";
import Hacktalks from "./landing/Hacktalks";
import Media from "./landing/Media";
import Footer from "./landing/Footer";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <div id="welcome">
          <Welcome />
        </div>
        <div id="about">
          <About />
          <Events />
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
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Landing;
