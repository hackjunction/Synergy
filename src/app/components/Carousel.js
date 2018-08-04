import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import carstyles from './Carousel.c.scss';

const Carousel = () => (
  <div>
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={55}
      totalSlides={6}
      interval={7000}
      isPlaying
      touchEnabled
    >
      <Slider>
        <Slide index={0} className={carstyles.slide_1}>
          <p className={carstyles.carouseltext}>
            “Awesome experience.”
            <br />- Participant, 2017
          </p>
        </Slide>
        <Slide index={1} className={carstyles.slide_2}>
          <p className={carstyles.carouseltext}>
            “The excitement and motivation to learn was very motivating for us. It was clear that we had come to the
            right place.”
            <br />- Nordea, 2017 partner
          </p>
        </Slide>
        <Slide index={2} className={carstyles.slide_4}>
          <p className={carstyles.carouseltext}>
            “The best hackathon in Europe. Ever.”
            <br />- Participant, 2017
          </p>
        </Slide>
        <Slide index={3} className={carstyles.slide_3}>
          <p className={carstyles.carouseltext}>
            “Junction was really impressive. It felt a bit like a piece of Silicon Valley in Otaniemi.”
            <br />- Finnair, 2017 partner
          </p>
        </Slide>
        <Slide index={4} className={carstyles.slide_2}>
          <p className={carstyles.carouseltext}>
            “Hundreds of people making crazy stuff.”
            <br />- Participant 2017
          </p>
        </Slide>
        <Slide index={5} className={carstyles.slide_3}>
          <p className={carstyles.carouseltext}>
            “Deep collaborations between young entrepreneurs with fresh ideas and executives from large industry
            players.”
            <br />- Erica Swallow, Huffington Post 2016
          </p>
        </Slide>
      </Slider>
    </CarouselProvider>
  </div>
);

export default Carousel;
