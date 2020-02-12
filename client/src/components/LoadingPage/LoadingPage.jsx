import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import paintPicture from "../../images/bg-home.png";
import "./LoadingPage.scss";

export default class LoadingPage extends Component {
  state = {
    loadingImg: paintPicture,
    altImg: "Black paint",
    name: this.props.name,
    lastName: this.props.lastName,
    jobName: this.props.jobName
  };
  render() {
    return (
      <section className="loading-page container">
        <div className="bloc-content">
          <img
            src={this.state.loadingImg}
            alt={this.state.altImg}
            className="img-loading"
          />
          <div className="bloc-infos">
            <h1>
              {this.props.name}
              {this.props.lastName.toUpperCase()}
            </h1>
            <p className="capitalize title-job">#{this.state.jobName}</p>
            <div className="btn flex-btn">
              <NavLink to="/fr/portfolio">
                <button className="btn-loading">Portfolio FR</button>
              </NavLink>
              <NavLink to="/en/portfolio">
                <button className="btn-loading">Portfolio EN</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
