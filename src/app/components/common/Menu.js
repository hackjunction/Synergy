import React from "react";
import { Link } from "react-router";

// Menu component
export default class Menu extends React.Component {
  // render
  render() {
    return (
      <div>
        <h1>Synergy</h1>
        <ul role="nav">
          <li><Link to="/example1">Example 1</Link></li>
          <li><Link to="/example2">Example 2</Link></li>
        </ul>
      </div>
    );
  }
}
