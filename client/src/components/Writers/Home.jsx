import React, { Component } from "react";
import { Link } from "react-router-dom";
import infos from "../Creations/infos";

export default class Home extends Component {
  state = {
    vals: infos
  };

  render() {
    console.log(this.state);

    const myname = this.state.vals.users.map(items => {
      return (
        <Link to={`/${items.name.toLowerCase()}`}>
          <h2>{items.name}</h2>
        </Link>
      );
    });
    return <div>{myname}</div>;
  }
}
