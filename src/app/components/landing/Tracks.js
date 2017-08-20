import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-flexbox-grid";
import { connect } from 'react-redux';
import "./landing.scss";
import TrackElement from "../common/TrackElement";

class Tracks extends Component {
  componentWillMount() {
    // the first time we load the app, we need that tracks list
    this.props.dispatch({ type: "GET_TRACKS" });
  }
  render() {
    var grid = [[6, 6], [6, 6], [6, 6]];
    var i = 0;

    return (
      <Grid fluid>
        <Row start="xs" className="junction_tracks">
          <Col xsOffset={1} xs={9} className="bold text-secondary">
            <h4>TRACKS</h4>
          </Col>
          <Col xsOffset={1} xs={5}>
            <h1 className="text-underline">BUILDING FOR TOMORROW</h1>
          </Col>
          <Col xsOffset={1} xs={9}>
            <p>
              Junction is divided into multiple themes (tracks), each including
              several challenges set by our partner companies. Teams are free to
              participate in different challenges.
            </p>
          </Col>
        </Row>
        {grid.map(row => {
          return (
            <Row height={1} center="xs">
              {row.map(width => {
                var element = (
                  <Col xs={width}>
                    {this.props.tracks[i]
                      ? <TrackElement key={i} post={this.props.tracks[i]} />
                      : <div />}
                  </Col>
                );
                i += 1;
                return element;
              })}
            </Row>;
          })}
      </Grid>
    );
  }
}

Tracks.propTypes = {
  dispatch: PropTypes.func,
  tracks: PropTypes.array,
};

// export the connected class
function mapStateToProps(state) {
  console.log("tracks", state.tracks);
  return {
    tracks: state.tracks || [],
  };
}

export default connect(mapStateToProps)(Tracks);
