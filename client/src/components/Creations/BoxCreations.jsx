import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import infos from "./infos";

export default class Box extends Component {
  state = {
    vals: infos,
    creations: ""
  };

  render() {
    return (
      <article className={`filter-item box-creations ${this.props.filterItem}`}>
        <img src={this.props.image} alt="" />

        <aside className={`creations`}>
          <NavLink
            to={
              window.location.pathname.includes("en")
                ? `/en/portfolio/creations/${this.props.titleCreations}`
                : `/fr/portfolio/creations/${this.props.titleCreations}`
            }
          >
            <div className="bloc-infos">
              <div className="infos">
                <h2>{this.props.titleCreations}</h2>
                <p>{this.props.title}</p>
              </div>
            </div>
          </NavLink>
        </aside>
      </article>
    );
  }
}
