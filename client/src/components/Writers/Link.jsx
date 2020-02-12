import React, { Component, Fragment } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Writers from "./Writers";
import Home from "./Home";

export default class Linked extends Component {
  state = {
    writers: []
  };

  render() {
    return (
      <BrowserRouter>
        <div className="profile">
          <Route exact path="/" component={Home} />
          <Route path="/:profile_id" component={Writers} />
        </div>
      </BrowserRouter>
    );
  }
}

const HomePage = () => (
  <div>
    <h1>Home page</h1>
    
  </div>
);
