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
        <Col xs={12} md={12}>
          <Row center="xs md">
            <Col >
              <img
                className="junction_logo"
                src="https://staging.hackjunction.com/wp-content/uploads/2017/08/junction_logo-1.png"
              />
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
      <ul className="dot fillUp">
        <li className="current">
          <a className="item" href="#">
            Welcome
          </a>
        </li>
        <li>
          <a className="item" href="#">
            About
          </a>
        </li>
        <li>
          <a className="item" href="#">
            Tracks
          </a>
        </li>
        <li>
          <a className="item" href="#">
            Partners
          </a>
        </li>
        <li>
          <a className="item" href="#">
            At the event
          </a>
        </li>
        <li>
          <a className="item" href="#">
            Media
          </a>
        </li>
      </ul>
    </nav>
    <nav className="junction_fixed_social">
      <Row>
        <div className="social-media">
          <a href="https://www.facebook.com/hackjunction" target="_blank">
          <img src="https://cdn0.iconfinder.com/data/icons/social-network-7/50/3-128.png" /></a>
        </div>
      </Row>
      <Row className="social-media">
        <div className="social-media">
          <a href="https://www.instagram.com/hackjunction/" target="_blank">
          <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c521.png" /></a>
        </div>
      </Row>
      <Row className="social-media">
        <div className="social-media">
          <a href="https://blog.hackjunction.com/" target="_blank">
          <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Medium-128.png" /></a>
        </div>
      </Row>
    </nav>
  </div>;

export default App;
