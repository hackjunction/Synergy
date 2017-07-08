import React from "react";
import { Route, Link } from "react-router-dom";
import Landing from "./Landing";
import Post from "./Post";
import About from "./About";

const App = () => (
  <div>
    <header>
      <Link to="/">Landing</Link>
      <Link to="/post">Post</Link>
      <Link to="/about">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Landing} />
      <Route exact path="/post" component={Post} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
);

export default App;
