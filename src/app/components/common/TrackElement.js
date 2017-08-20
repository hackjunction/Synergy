import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TrackElement extends Component {
  // render
  render() {
    const { post } = this.props;

    if(post){
      const style = {
        "background": `url(${post.image})`,
        "height": "180px"
      };

      return (
        <div className="responsive" style={style}>
              {/*{post.title}
              {post.content}
              */}
        </div>
      );
    } else return <div></div>
  }
}

// prop checks
TrackElement.propTypes = {
  post: PropTypes.object.isRequired,
};
