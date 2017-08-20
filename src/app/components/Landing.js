import React from "react";
import { Grid } from "react-flexbox-grid";
import "./landing/landing.scss";
import Welcome from "./landing/Welcome";
import About from "./landing/About";
import Tracks from "./landing/Tracks";
import Partners from "./landing/Partners";
import Hacktalks from "./landing/Hacktalks";
import Media from "./landing/Media";
import Pictures from "./landing/Pictures";
import Footer from "./landing/Footer";

const Landing = () =>
  <Grid fluid>
    <Welcome />
    <About />
    <Tracks />
    <Partners />
    <Hacktalks />
    <Media />
    <Pictures />
    <Footer />
  </Grid>;

export default Landing;
