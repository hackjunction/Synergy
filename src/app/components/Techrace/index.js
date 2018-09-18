import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Techrace.c.scss';
import BlockHeader from '../viewBlocks/BlockHeader';
import Block from '../viewBlocks/Block';
import TopNav from '../TopNav';
import PartnerSection from '../landing/PartnerSection';
import Footer from '../landing/Footer';
import ElementGrid from '../common/ElementGrid';
import EventElement from './EventElement';

{
  /*import Tracks from './Tracks';*/
}

class Techrace extends Component {
  componentWillMount() {
    // the first time we load the app, we need that tracks list
    this.props.dispatch({ type: 'GET_TRACKS' });
  }
  render() {
    console.log('tracks1', this.props.tracks);
    var tracks = this.props.tracks.filter(track => {
      return track.year === '201800';
    });
    console.log('tracks2', tracks);
    return (
      <div>
        <TopNav />
        <div>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2018/08/techrace-event-banner-01.png"
            className={styles.techRaceImage}
            alt="TechRace Banner"
          />
        </div>
        <Block className={styles.block_white}>
          <BlockHeader title="WHY?" />
          <Row>
            <Col xs={12}>
              TechRace is the Junction pre-event tour in Finland. Every TechRace participant will get a secret code and
              a huge advantage when applying to Junction 2018!
              <br />
              <br />
              Get into the hackathon spirit with TechRace events.
              <br />
              <br />
            </Col>
          </Row>
          <BlockHeader title="WHAT?" />
          <Row className="junction_terminal">
            <Col xs={12}>
              TechRace tours through nine cities to find the top concentration of tech masterminds in Finland. In every
              event, the local participants will receive a large pool of challenges to solve, ranging from programming
              puzzles to design problems, from basic tasks to extremely problematic ones. The winning city, “the
              techiest of them all”, is chosen based on the total points all participants earn during the local TechRace
              event. So, gather your local tech community together and get ready to race against other cities!
              <br />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6}>
              <img
                src="https://staging.hackjunction.com/wp-content/uploads/2018/08/junction_logos_2018-wordmark_black.png"
                className={styles.partnerImage}
                alt="Junction Logo"
              />
            </Col>
            <Col xs={12} sm={6}>
              <img
                src="https://staging.hackjunction.com/wp-content/uploads/2018/08/Startuplifers_Logo_Black_RGB_small.png"
                className={styles.partnerImage}
                alt="Startuplifers Logo"
              />
            </Col>
          </Row>
        </Block>
        <Block className={styles.block}>
          <BlockHeader title="How to participate" />
          <p>
            TechRace is open for anyone interested in learning, solving, developing and trying new stuff with tech!
            <br />
            <br />
            You can be a software developer, first year business student, designer, law expert…. It doesn’t matter what
            your background is, this is for everyone!
            <br />
            <br />
            Find out more info about participating from the events down below!<br />
            <a href="https://hackjunction.typeform.com/to/yB6bxy">
              <button className={styles.apply_button}>Registration is open here!</button>
            </a>
            <br />
          </p>
          <BlockHeader title="Schedule" />
          <p>
            TechRace starts in mid September in Helsinki and ends early October in Espoo, touring most of the college
            cities in Finland.
            <br />
            <br />
            The TechRace events are one-night-events. The program includes the tech race part and short pitches from all
            of the organizers.
            <br />
            <br />
            More detailed schedule:
          </p>
          <div>
            {tracks && tracks.filter(track => track.open).map((track, i) => <EventElement key={i} track={track} />)}
          </div>
          <ElementGrid
            grid={[[4, 4, 4], [4, 4, 4], [4, 4, 4]]}
            elements={
              tracks && tracks.filter(track => !track.open).map((track, i) => <EventElement key={i} track={track} />)
            }
          />
        </Block>
        <Block className={styles.block_white}>
          <PartnerSection
            categories={[
              { priority: 300, size_md: 4, size_xs: 6 },
              { priority: 200, size_md: 3, size_sm: 3, size_xs: 4 }
            ]}
            year={201800}
          />
        </Block>
        {/*<Tracks year={2018} />*/}
        <Footer />
      </div>
    );
  }
}

Techrace.propTypes = {
  dispatch: PropTypes.func,
  tracks: PropTypes.array
};

// export the connected class
function mapStateToProps(state) {
  //console.log('tracks', state.tracks);
  return {
    tracks: state.tracks || []
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Techrace);
