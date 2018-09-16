import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import PropTypes from 'prop-types';
import carstyles from './Carousel.c.scss';

const Slideshow = props => (
  <div>
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={48}
      totalSlides={props.elements.length}
      interval={7000}
      isPlaying
      touchEnabled
    >
      <Slider>
        {props.elements.map(slide => {
          return (
            <Slide
              index={slide.index}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover'
              }}
            >
              <p className={carstyles.carouseltext}>
                {slide.quote}
                <br />
                {slide.quoter}
              </p>
            </Slide>
          );
        })}
      </Slider>
    </CarouselProvider>
  </div>
);

Slideshow.propTypes = {
  elements: PropTypes.array
};

export default Slideshow;
