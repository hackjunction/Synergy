import React, { Component } from 'react';

class Volunteer extends Component {
  render() {
    var style = {
      position: "absolute",
      left:0,
      right:0,
      bottom:0,
      top:0,
      border:0
    };

    return (
        <div>
          <iframe style={style} id="typeform-full" width="100%" height="100%" frameBorder="0" src="https://hackjunction.typeform.com/to/mRVe5P"></iframe>
          <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script>
        </div>
    );
  }
}


export default Volunteer;
