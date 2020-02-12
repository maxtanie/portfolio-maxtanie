import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./ButtonLink.scss";

export default class ButtonLink extends Component {
  render() {
    const wLocation = window.location.pathname.includes("/en");
    return (
      <div className="bloc-btn" style={{ textAlign: `${this.props.position}` }}>
        <NavLink
          to={
            wLocation
              ? `/en/portfolio/${this.props.linkEn}`
              : `/fr/portfolio/${this.props.linkFr}`
          }
        >
          <button
            className="btn"
            style={{
              background: `${this.props.background}`,
              width: `${this.props.width}px`,
              border: `${this.props.border}`,
              color: `${this.props.color}`
            }}
          >
            {wLocation ? this.props.valueEn : this.props.valueFr}
          </button>
        </NavLink>
      </div>
    );
  }
}
