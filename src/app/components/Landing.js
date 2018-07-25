import React from 'react';
import Welcome from './landing/Welcome';
import About from './landing/About';
import Apply from './landing/Apply';
import EventsAroundTheWorld from './landing/EventsAroundTheWorld';
import Partners from './landing/Partners';
import Faqs from './landing/Faqs';
import Stories from './landing/Stories';
import Media from './landing/Media';
import JunctionX from './landing/JunctionX';
import Join from './landing/Join';
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
        <div id="apply">
          <Apply />
        </div>
        <div id="events_around_the_world">
          <EventsAroundTheWorld />
        </div>
        <div id="junctionx">
          <JunctionX />
        </div>
        <div id="partners">
          <Partners />
        </div>
        <div id="faqs">
          <Faqs />
        </div>
        <div id="media">
          <Media />
        </div>
        <div id="stories">
          <Stories />
        </div>
        <div id="join">
          <Join />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Landing;
