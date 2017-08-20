import React from "react";
import { Route } from "react-router-dom";
import Scrollchor from "react-scrollchor";
import { Row } from "react-flexbox-grid";
import Landing from "./Landing";
import Post from "./Post";
import About from "./About";
import Track from './Track';

class App extends React.Component {
  render() {
    return (
      <div className="junction_website">
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,700,900"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400"
          rel="stylesheet"
        />
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/about" component={About} />
          <Route path="/:track" component={Track} />
        </div>
        <nav className="junction_menu">
          <ul>
            <Scrollchor to="#welcome">
              <li className="active">Welcome</li>
            </Scrollchor>
            <Scrollchor to="#about">
              <li>About</li>
            </Scrollchor>
            <Scrollchor to="#tracks">
              <li>Tracks</li>
            </Scrollchor>
            <Scrollchor to="#partners" className="nav-link">
              <li>Partners</li>
            </Scrollchor>
            <Scrollchor to="#hacktalks">
              <li>At the event</li>
            </Scrollchor>
            <Scrollchor to="#media">
              <li>Media</li>
            </Scrollchor>
          </ul>
        </nav>

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
      </div>
    );
  }
}

export default App;
