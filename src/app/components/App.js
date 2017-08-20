import React from 'react';
import { Route, Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Landing from './Landing';
import Post from './Post';
import About from './About';

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

        <Grid fluid>
          <Row className="topnav">
            <Col xs={12}>
              <Row>
                <Col xs={1}>
                  <img
                    className="junction_logo"
                    src="https://staging.hackjunction.com/wp-content/uploads/2017/08/junction_logo-1.png"
                  />
                </Col>
                <Col xsOffset={7} xs={4} className="junction_header_nav">
                  <Row end="xs">
                    <Col xs={3}>
                      <Link to="/">COMMUNITY</Link>
                    </Col>
                    <Col xs={3}>
                      <Link to="/post">EVENT</Link>
                    </Col>
                    <Col xs={3}>
                      <Link to="/about">PARTNERS</Link>
                    </Col>
                    <Col xs={3}>
                      <Link to="/about">REGISTER</Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
        <Grid fluid>
          <Route exact path="/" component={Landing} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/about" component={About} />
        </Grid>
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
              <img src="https://cdn0.iconfinder.com/data/icons/social-network-7/50/3-128.png" />
            </div>
          </Row>
          <Row className="social-media">
            <div className="social-media">
              <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c521.png" />
            </div>
          </Row>
          <Row className="social-media">
            <div className="social-media">
              <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Medium-128.png" />
            </div>
          </Row>
        </nav>
      </div>
    );
  }
}

export default App;
