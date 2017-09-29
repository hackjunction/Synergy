import React from 'react';
import Schedule from './junction2017/Schedule';
import Hacktalks from './landing/Hacktalks';
import Volunteer from './junction2017/Volunteer';
import Venue from './junction2017/Venue';
import Hardware from './junction2017/Hardware';
import Footer from './junction2017/Footer';

class Junction2017 extends React.Component {
  render() {
    return (
      <div>
        <div id="volunteer">
          <Volunteer />
        </div>
        <div id="schedule">
          <Schedule />
        </div>
        <div id="venue">
          <Venue />
        </div>
        <div id="hardware">
          <Hardware />
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
