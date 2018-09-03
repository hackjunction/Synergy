import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { scroller, Element as ScrollElement } from 'react-scroll';
import styles from './EventElement.c.scss';

// import Challenge from './challenges/Challenge';

class EventElement extends Component {
  render() {
    console.log('render');
    var track = this.props.track;
    var toggle = function() {
      this.props.toggleTrack(track.slug);
      setTimeout(() => {
        scroller.scrollTo(track.slug, {
          duration: 500,
          delay: 100,
          smooth: true,
          offset: -50
        });
      }, 1000);
    }.bind(this);
    var style = {};
    if (track.image) {
      style = {
        backgroundImage: `url(${track.image})`
      };
    }

    return track.open ? (
      <Col xs={12} md={12} className={styles.open_container}>
        <ScrollElement name={track.slug} />
        <Row className={styles.header}>
          <Col xs={12} md={5}>
            <h1>{track.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h3>{track.description}</h3>
          </Col>
          <Col xs={12}>
            <p dangerouslySetInnerHTML={{ __html: track.content }} />
          </Col>
        </Row>
        <Row center="xs" onClick={toggle} className={styles.arrow}>
          <div className="fa fa-chevron-up" />
        </Row>
      </Col>
    ) : (
      <div onClick={toggle}>
        <div className={`responsive ${styles.trackCell}`} style={style}>
          <div className={styles.awesome_overlay}>
            <div className={styles.inside}>
              <h2 dangerouslySetInnerHTML={{ __html: track.title }} />
              <h3 dangerouslySetInnerHTML={{ __html: track.description }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EventElement.propTypes = {
  track: PropTypes.object,
  toggleTrack: PropTypes.func
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTrack(slug) {
      console.log('dispatched');
      dispatch({ type: 'TRACK_TOGGLE', slug });
    },
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventElement);
