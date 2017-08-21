import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './Landing';
import Post from './Post';
import About from './About';
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
      </div>
    );
  }
}

export default App;
