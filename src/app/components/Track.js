import React, { Component } from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

class Track extends Component {
  componentWillMount() {
    if(this.props.tracks.length == 0){
      this.props.getTracks();
    }
  }
  render() {
    var match = this.props.match;
    if(!match.params || !match.params.track) return <Redirect to="/"/>;
    if(this.props.tracks.length > 0){
      var track = this.props.tracks.filter(track => track.slug === match.params.track);
      if(track.length === 0) return <Redirect to="/"/>;
      else track = track[0];
    } else track = {};

    var style = {
      background: `url(${track.image})`
    };

    return (
      <Grid fluid>
        <Row center="xs sm md" style={style} className="track_header">
          <Col className="track_name" xs={12} sm={12} md={12}>
            {track.title}
          </Col>
        </Row>
        <Row>
          <Col className="track_content" xs={12} sm={12} md={12}>
            <div dangerouslySetInnerHTML={{__html: track.content}}></div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Track.propTypes = {
  params: PropTypes.object,
  tracks: PropTypes.array,
  getTracks: PropTypes.func,
  match: PropTypes.object
};

function mapStateToProps(state) {
  console.log('tracks', state.tracks);
  return {
    tracks: state.tracks || [],
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getTracks(){
      dispatch({ type: 'GET_TRACKS' });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Track);
