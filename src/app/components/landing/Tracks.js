import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col } from "react-flexbox-grid";
import TrackElement from "../common/TrackElement";
import Block from "../viewBlocks/Block";
import BlockHeader from "../viewBlocks/BlockHeader";

class Tracks extends Component {
  componentWillMount() {
    // the first time we load the app, we need that tracks list
    this.props.dispatch({ type: "GET_TRACKS" });
  }
  render() {
    var grid = [[6, 6], [6, 6], [6, 6]];
    var i = 0;

    return (
      <Block>
        <BlockHeader title="BUILDING FOR TOMORROW">
          <p>
            Junction is divided into multiple themes (tracks), each including
            several challenges set by our partner companies. Teams are free to
            participate in different challenges.
          </p>
        </BlockHeader>
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
            </Row>
          );
        })}
      </Block>
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
