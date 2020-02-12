import React, { Component } from "react";
import "./Skills.scss";

export default class Skills extends Component {
  render() {
    return (
      <section className="bg container-main">
        <div className="container-skills">
          <div className="big-bloc">
            <h2 className="center light">
              {window.location.pathname.includes("/en")
                ? this.props.titleSkillsEn
                : this.props.titleSkillsFr}
            </h2>
          </div>
          <div className="grid">{this.props.children}</div>
        </div>
      </section>
    );
  }
}
