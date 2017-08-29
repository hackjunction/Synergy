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
import Footer from './landing/Footer';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <nav className="junction_fixed_social">
          <Row>
            <div className="social-media">
              <a href="https://www.facebook.com/hackjunction">
                <img src="https://cdn0.iconfinder.com/data/icons/social-network-7/50/3-128.png" />
              </a>
            </div>
          </Row>
          <Row className="social-media">
            <div className="social-media">
              <a href="https://www.instagram.com/hackjunction/">
                <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c521.png" />
              </a>
            </div>
          </Row>
          <Row className="social-media">
            <div className="social-media">
              <a href="https://blog.hackjunction.com/">
                <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Medium-128.png" />
              </a>
            </div>
          </Row>
        </nav>
        <nav className="junction_menu">
          <ul>
            <li><Scroll.Link activeClass="active" to="welcome" spy={true} smooth={true} duration={500}>Welcome</Scroll.Link></li>
            <li><Scroll.Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</Scroll.Link></li>
            <li><Scroll.Link activeClass="active" to="events" spy={true} smooth={true} duration={500}>Events</Scroll.Link></li>
            <li><Scroll.Link activeClass="active" to="tracks" spy={true} smooth={true} duration={500}>Tracks</Scroll.Link></li>
            <li><Scroll.Link activeClass="active" to="partners" spy={true} smooth={true} duration={500}>Partners</Scroll.Link></li>
            <li><Scroll.Link activeClass="active" to="hacktalks" spy={true} smooth={true} duration={500}>FAQ</Scroll.Link></li>
            <li><Scroll.Link activeClass="active" to="media" spy={true} smooth={true} duration={500}>Media</Scroll.Link></li>
          </ul>
        </nav>
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
