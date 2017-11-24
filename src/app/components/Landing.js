import React from 'react';
import Scroll from 'react-scroll';
import { Row } from 'react-flexbox-grid';
import Welcome from './landing/Welcome';
import About from './landing/About';
import Events from './landing/Events';
import Tracks from './landing/Tracks';
import Partners from './landing/Partners';
import Hacktalks from './landing/Hacktalks';
import Media from './landing/Media';
import Volunteer from './landing/Volunteer';
import Footer from './landing/Footer';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <nav className="junction_fixed_social">
          <Row>
            <div className="social-media">
              <a href="https://www.facebook.com/hackjunction">
                <img src="https://staging.hackjunction.com/wp-content/uploads/2017/08/fb.png" alt="" />
              </a>
            </div>
          </Row>
          <Row className="social-media">
            <div className="social-media">
              <a href="https://www.instagram.com/hackjunction/">
                <img src="https://staging.hackjunction.com/wp-content/uploads/2017/08/ig.png" alt="" />
              </a>
            </div>
          </Row>
          <Row className="social-media">
            <div className="social-media">
              <a href="https://blog.hackjunction.com/">
                <img src="https://staging.hackjunction.com/wp-content/uploads/2017/08/md.png" alt="" />
              </a>
            </div>
          </Row>
        </nav>
        <nav className="junction_menu">
          <ul>
            <li>
              <Scroll.Link activeClass="active" to="welcome" spy smooth duration={500}>
                Welcome
              </Scroll.Link>
            </li>
            <li>
              <Scroll.Link activeClass="active" to="about" spy smooth duration={500}>
                About
              </Scroll.Link>
            </li>
            <li>
              <Scroll.Link activeClass="active" to="tracks" spy smooth duration={500}>
                Tracks
              </Scroll.Link>
            </li>
            <li>
              <Scroll.Link activeClass="active" to="partners" spy smooth duration={500}>
                Partners
              </Scroll.Link>
            </li>
            <li>
              <Scroll.Link activeClass="active" to="hacktalks" spy smooth duration={500}>
                FAQ
              </Scroll.Link>
            </li>
            <li>
              <Scroll.Link activeClass="active" to="events" spy smooth duration={500}>
                Special Events
              </Scroll.Link>
            </li>
            <li>
              <Scroll.Link activeClass="active" to="media" spy smooth duration={500}>
                Media
              </Scroll.Link>
            </li>
          </ul>
        </nav>
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
        <div id="events">
          <Events />
        </div>
        <div id="media">
          <Media />
        </div>
        <div id="volunteer">
          <Volunteer />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Landing;
