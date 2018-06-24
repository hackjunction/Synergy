import React from 'react';
import Scroll from 'react-scroll';
import Welcome from './landing/Welcome';
import About from './landing/About';
import Apply from './landing/Apply';
import Partners from './landing/Partners';
import Hacktalks from './landing/Hacktalks';
import Media from './landing/Media';
import Volunteer from './landing/Volunteer';
import Footer from './landing/Footer';

class Landing extends React.Component {
  render() {
    return (
      <div>
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
              <Scroll.Link activeClass="active" to="apply" spy smooth duration={500}>
                Apply
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
        <div id="apply">
          <Apply />
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
