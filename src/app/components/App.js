import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Landing from './Landing';
import Post from './Post';
import About from './About';

const App = () =>
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
          <Row end="xs">
            <Col xs={1}>
              <img
                className="junction_logo"
                src="https://staging.hackjunction.com/wp-content/uploads/2017/08/junction_logo-1.png"
              />
            </Col>
            <Col xs>
              <Row end="xs">
                <Col xs={1}>
                  <Link to="/">Landing</Link>
                </Col>
                <Col xs={1}>
                  <Link to="/post">Post</Link>
                </Col>
                <Col xs={1}>
                  <Link to="/about">About</Link>
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
        <li>Welcome</li>
        <li>About</li>
        <li>Tracks</li>
        <li>Partners</li>
        <li>At the event</li>
        <li>Media</li>
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
  </div>;

export default App;
