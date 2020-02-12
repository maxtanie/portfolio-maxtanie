import React, { Component } from "react";

export default class TitleName extends Component {
  render() {
    return (
      <div className="big-bloc">
        <h2 className="center light">
          {window.location.pathname.includes("/en")
            ? this.props.titleSkillsEn
            : this.props.titleSkillsFr}
        </h2>
      </div>
    );
  }
}
