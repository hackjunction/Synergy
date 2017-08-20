import React from "react";
import Slider from "react-slick";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./landing.scss";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Pictures = () =>
  <Grid fluid>
    <Row start="xs" className="junction_media">
      <Col xsOffset={1} xs={5}>
        <h1 className="text-underline">IN PICTURES</h1>
      </Col>
    </Row>
    <Row start="xs">
      <Col xsOffset={1} xs={9}>
        <div className="picture_container">
          <Slider {...settings}>
            <div>
              <img
                className="picture_continer_image"
                src="http://lorempixel.com/400/200/"
                className="responsive"
              />
            </div>
            <div>
              <img
                className="picture_continer_image"
                src="http://lorempixel.com/400/200/"
                className="responsive"
              />
            </div>
            <div>
              <img
                className="picture_continer_image"
                src="http://lorempixel.com/400/200/"
                className="responsive"
              />
            </div>
            <div>
              <img
                className="picture_continer_image"
                src="http://lorempixel.com/400/200/"
                className="responsive"
              />
            </div>
            <div>
              <img
                className="picture_continer_image"
                src="http://lorempixel.com/400/200/"
                className="responsive"
              />
            </div>
            <div>
              <img
                className="picture_continer_image"
                src="http://lorempixel.com/400/200/"
                className="responsive"
              />
            </div>
            <div>
              <img
                className="picture_continer_image"
                src="http://lorempixel.com/400/200/"
                className="responsive"
              />
            </div>
            <div>
              <img
                className="picture_continer_image"
                src="http://lorempixel.com/400/200/"
                className="responsive"
              />
            </div>
          </Slider>
        </div>
      </Col>
    </Row>
  </Grid>;

export default Pictures;
