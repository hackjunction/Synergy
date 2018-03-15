import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Post from './Post';
import Community from './Community';
import Track from './Track';
import Challenge from './Challenge';
import AllTracks from './AllTracks';
import AllPartners from './AllPartners';
import AllJobs from './AllJobs';
import Volunteer from './Volunteer';
import Junction2017 from './Junction2017';
import JunctionX from './JunctionX';
import GoldenTicket from './GoldenTicket';
import NotFound from './NotFound';
import MobileNav from './MobileNav';

class App extends React.Component {
  render() {
    return (
      <div>
        <MobileNav />
        <div className="junction_website" id="junction_website">
          <link href="https://fonts.googleapis.com/css?family=Montserrat:300,700,900" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />
          <div>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/post" component={Post} />
              <Route exact path="/community" component={Community} />
              <Route exact path="/volunteer" component={Volunteer} />
              <Route path="/tracks/:track" component={Track} />
              <Route path="/challenges/:challenge" component={Challenge} />
              <Route path="/all-tracks" component={AllTracks} />
              <Route path="/partners" component={AllPartners} />
              <Route path="/2017" component={Junction2017} />
              <Route path="/junctionx" component={JunctionX} />
              <Route path="/jobs" component={AllJobs} />
              <Route path="/goldenticket" component={GoldenTicket} />
              <Route path="/404" component={NotFound} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
