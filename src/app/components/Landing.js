import React from 'react';
import './landing/landing.scss';
import Welcome from './landing/Welcome';
import About from './landing/About';
import Tracks from './landing/Tracks';
import Partners from './landing/Partners';
import Hacktalks from './landing/Hacktalks';
import Media from './landing/Media';

const Landing = () =>
  <div>
    <Welcome />
    <About />
    <Tracks />
    <Partners />
    <Hacktalks />
    <Media />
  </div>;

export default Landing;
