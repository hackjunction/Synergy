import React from "react";
import { Route } from "react-router-dom";
import Landing from "./Landing";
import Post from "./Post";
import About from "./About";
import Track from "./Track";
import Challenge from "./Challenge";
import AllTracks from "./AllTracks";
import AllPartners from "./AllPartners";
import Volunteer from "./Volunteer";
import Junction2017 from "./Junction2017";
import MobileNav from "./MobileNav";

class App extends React.Component {
  render() {
    return (
      <div>
        <MobileNav />
        <div className="junction_website" id="junction_website">
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
            <Route exact path="/volunteer" component={Volunteer} />
            <Route path="/tracks/:track" component={Track} />
            <Route path="/challenges/:challenge" component={Challenge} />
            <Route path="/all-tracks" component={AllTracks} />
            <Route path="/partners" component={AllPartners} />
            <Route path="/junction2017" component={Junction2017} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
