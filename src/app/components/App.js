import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Landing from './Landing';
import Post from './Post';
import About from './About';

const App = () =>
  <Grid fluid>
    <Row>
      <Col xs={12}>
        <Row end="xs">
          <Col xs={6}>
            <img src="http://i.imgur.com/ZrifrOS.png" />
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
    <Row>
      <Route exact path="/" component={Landing} />
      <Route exact path="/post" component={Post} />
      <Route exact path="/about" component={About} />
    </Row>
  </Grid>;

export default App;
