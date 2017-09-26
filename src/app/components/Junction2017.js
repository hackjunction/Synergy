import React from 'react';
import Scroll from 'react-scroll';
import { Row } from 'react-flexbox-grid';
import Schedule from './junction2017/Schedule';
import Hacktalks from './junction2017/Hacktalks';
import Volunteer from './junction2017/Volunteer';
import Footer from './junction2017/Footer';

class Junction2017 extends React.Component {
  render() {
    return (
      <div>
        <nav className="junction_fixed_social">
          <Row>
            <div className="social-media">
              <a href="https://www.facebook.com/hackjunction">
                <img src="https://staging.hackjunction.com/wp-content/uploads/2017/08/fb.png" />
              </a>
            </div>
          </Row>
          <Row className="social-media">
            <div className="social-media">
              <a href="https://www.instagram.com/hackjunction/">
                <img src="https://staging.hackjunction.com/wp-content/uploads/2017/08/ig.png" />
              </a>
            </div>
          </Row>
          <Row className="social-media">
            <div className="social-media">
              <a href="https://blog.hackjunction.com/">
                <img src="https://staging.hackjunction.com/wp-content/uploads/2017/08/md.png" />
              </a>
            </div>
          </Row>
        </nav>
        <nav className="junction_menu">
          <ul>
            <li><Scroll.Link activeClass="active" to="volunteer" spy={true} smooth={true} duration={500}>Junction 2017</Scroll.Link></li>
            <li><Scroll.Link activeClass="active" to="schedule" spy={true} smooth={true} duration={500}>Schedule</Scroll.Link></li>
            <li><Scroll.Link activeClass="active" to="hacktalks" spy={true} smooth={true} duration={500}>FAQ</Scroll.Link></li>
          </ul>
        </nav>
        <div id="volunteer">
          <Volunteer />
        </div>
        <div id="about">
          <Schedule />
        </div>
        <div id="hacktalks">
          <Hacktalks />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Junction2017;
